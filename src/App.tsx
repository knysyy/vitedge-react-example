import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { renderRoutes } from 'react-router-config'
import { Link, Switch } from 'react-router-dom'

// @ts-ignore
const App = ({ router }) => {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {renderRoutes(router && router.routes)}
        </Switch>
      </HelmetProvider>
    </React.StrictMode>
  )
}

export default App
