import React, {createElement} from 'react'
import marksy from 'marksy/jsx'
import {
  Button,
  Li,
  Link,
  Ul, 
} from '..'

interface MarkdownProps {
  markdown: any
}

export const Markdown = (props: MarkdownProps) => {

  const {markdown} = props

  const compile = marksy({
    createElement,
    elements: {
      a (props: any) {
        return (<Link {...props} />)
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
      }
    },
  })

  return compile(markdown).tree
}