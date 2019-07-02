import * as React from 'react'
import {
  Button,
  ButtonGroup,
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam
      omnis quisquam fugiat cum, odio error, illo fuga mollitia esse voluptate
      nostrum libero nesciunt dicta sed dignissimos alias quis corporis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam
      omnis quisquam fugiat cum, odio error, illo fuga mollitia esse voluptate
      nostrum libero nesciunt dicta sed dignissimos alias quis corporis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam
      omnis quisquam fugiat cum, odio error, illo fuga mollitia esse voluptate
      nostrum libero nesciunt dicta sed dignissimos alias quis corporis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam
      omnis quisquam fugiat cum, odio error, illo fuga mollitia esse voluptate
      nostrum libero nesciunt dicta sed dignissimos alias quis corporis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam
      omnis quisquam fugiat cum, odio error, illo fuga mollitia esse voluptate
      nostrum libero nesciunt dicta sed dignissimos alias quis corporis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam
      omnis quisquam fugiat cum, odio error, illo fuga mollitia esse voluptate
      nostrum libero nesciunt dicta sed dignissimos alias quis corporis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam
      omnis quisquam fugiat cum, odio error, illo fuga mollitia esse voluptate
      nostrum libero nesciunt dicta sed dignissimos alias quis corporis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam
      omnis quisquam fugiat cum, odio error, illo fuga mollitia esse voluptate
      nostrum libero nesciunt dicta sed dignissimos alias quis corporis?</p>
      <p><Link href='bar'>foo</Link></p>
      <ButtonGroup>
        <Button className='primary'>foo</Button>
        <Button className='error'>bar</Button>
      </ButtonGroup>
    </main>
    </>
  )
}

Home.defaultProps = {
  h1: 'foo',
  children: <p>yes</p>,
};

export {Home}