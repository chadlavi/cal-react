// tslint:disable-next-line: no-submodule-imports
import marksy from 'marksy/jsx'
import React, { createElement } from 'react'
import {
  Button,
  ButtonGroup,
  Code,
  H1,
  Hr,
  Img,
  Li,
  Link,
  Pre,
  Ul,
} from '..'
import { isExternal } from '../../helpers'

export const Markdown = (markdown: string): {content: object, title: string} => {

  const compile = marksy({
    createElement,
    elements: {
      a(props: any) {
        const external = isExternal(props.href)
        const { href, ...other } = props
        return (
          external
          ? <Link href={href} {...other} />
          : <Link to={href} {...other} />
        )
      },
      code(props: any) {
        return <Pre {...props} />
      },
      codespan(props: any) {
        return <Code {...props} />
      },
      h1(props: any) {
        return <H1 {...props} />
      },
      hr() {
        return <Hr />
      },
      img(props: any) {
        return <Img {...props} />
      },
      ul(props: any) {
        return <Ul {...props} />
      },
      li(props: any) {
        return <Li {...props} />
      },
    },
    components: {
      Button(props: any) {
        return <Button {...props} />
      },
      ButtonGroup(props: any) {
        return <ButtonGroup {...props} />
      },
    },
  })

  return {
    content: compile(markdown).tree,
    title: compile(markdown).toc[0] ? compile(markdown).toc[0].title : undefined,
  }
}
