import * as React from 'react'
import {
  Button,
  Nav,
  Skipnav,
  Link,
} from '../'

interface IProps {
  h1?: string
  children?: any
  navlinks?: object
}

const Home: React.FC<IProps> = (props: IProps) => {
  const {
    h1,
    children,
  } = props

  return (
    <>
    <Skipnav />
    <Nav />
    <main id='main'>
      <h1>{h1}</h1>
      {children}
      <Link href='bar'>foo</Link>
      <Button className='primary'>foo</Button> <Button className='error'>bar</Button>
    </main>
    </>
  )
}

Home.defaultProps = {
  h1: 'foo',
  children: <p>yes</p>,
};

export {Home}