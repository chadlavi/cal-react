import * as React from 'react'
import {
  Button,
  ButtonGroup,
  Markdown,
  Nav,
  Skipnav,
} from '../'
import markdown from '../../markdown/Home.md'

interface IProps {
  navlinks?: object
}

const Home: React.FC<IProps> = (props: IProps) => (
  <>
  <Skipnav />
  <Nav />
  <main id='main'>
    <Markdown markdown={markdown} />
    <ButtonGroup>
      <Button
        primary
        onClick={() => alert('ok')}
      >foo</Button>
      <Button error>bar</Button>
    </ButtonGroup>
  </main>
  </>
)

export {Home}