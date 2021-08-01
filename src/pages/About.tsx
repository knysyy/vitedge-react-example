import React, {useEffect, useState} from 'react'
import {RouteConfigComponentProps} from 'react-router-config'
import {Helmet} from 'react-helmet-async';

interface AboutProps extends RouteConfigComponentProps {
  number: number
  isLoadingProps: boolean
  isRevalidatingProps: boolean
}

const About = ({ route, number, ...props }: AboutProps) => {
  const [msg, setMsg] = useState()

  useEffect(() => {
    let unmounted = false;

    (async () => {
      if (!unmounted) {
        const res = await fetch('./api/hello/vitedge', {
          method: 'GET',
          headers: { 'content-type': 'application/json' }
        })
        setMsg((await res.json() || {}).msg)
      }
    })()

    return () => {
      unmounted = true;
    };
  }, [])

  return (
    <>
      <Helmet title="About" />
      <h1>About</h1>
      <p>number {number}</p>
      <p>{msg}</p>
    </>
  )
}

export default About
