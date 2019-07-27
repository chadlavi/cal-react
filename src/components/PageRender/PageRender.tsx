import * as React from 'react'
import Helmet from 'react-helmet'
import {
  Markdown,
  Nav,
  Skipnav,
} from '..'

interface PageRenderProps {
  markdown: string
  title?: string
}

const PageRender: React.FC<PageRenderProps> = (props) => {
  
  const { markdown, title } = props
  const rendered = Markdown(markdown)

  return (
    <>
      <Helmet>
        <title>{ title }{ rendered.title ? `- ${ rendered.title }` : '' }</title>
      </Helmet>
      <Skipnav />
      <Nav />
      <main id='main'>
        { rendered.content }
      </main>
    </>
  )
}

PageRender.defaultProps = {
  title: 'Chad Lavimoniere'
}

export { PageRender }