import React, {createElement} from 'react'
import marksy from 'marksy/jsx'
import {
  Button,
  ButtonGroup,
  Li,
  Link,
  isExternal,
  Ul, 
} from '..'

export const Markdown = (markdown: string) : {content: object, title: string} => {

  const compile = marksy({
    createElement,
    elements: {
      a (props: any) {
        const external = isExternal(props.href)
        const {href, ...other} = props
        return (
          external
          ? <Link href={href} {...other} />
          : <Link to={href} {...other} />
      )
      },
      ul (props: any) {
        return (<Ul {...props} />)
      },
      li (props: any) {
        return (<Li {...props} />)
      },
    },
    components: {
      Button (props: any) {
        return (
          <Button {...props} />
        )
      },
      ButtonGroup (props: any) {
        return (
          <ButtonGroup {...props} />
        )
      },
    },
  })

  return {
    content: compile(markdown).tree,
    title: compile(markdown).toc[0].title,
  }
}