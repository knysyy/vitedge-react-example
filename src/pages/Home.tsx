import React, {useState} from 'react'
import { RouteConfigComponentProps } from "react-router-config";
import { Helmet } from 'react-helmet-async';

interface HomeProps extends RouteConfigComponentProps {
  msg: string
}

const Home = ({ msg, route, ...props }: HomeProps) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <Helmet title='home' />
      <h1>Home</h1>
      <p>{msg}</p>
      <p>{count}</p>
      <button type="button" onClick={() => increment()}>increment</button>
      <button type="button" onClick={() => decrement()}>decrement</button>
    </>
  )
}

export default Home
