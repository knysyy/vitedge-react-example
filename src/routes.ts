import {createElement} from 'react';
import {RouteConfig} from 'react-router-config';

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: () => import('./pages/Home'),
    meta: {
      propsGetter: 'default'
    }
  },
  {
    path: '/about',
    name: 'about',
    exact: true,
    component: () => import('./pages/About')
  }
].map(({ component: fn, ...route }) => {
  let component: any = null
  return {
    ...route,
    component: (props: any) => {
      if (!component) {
        throw fn().then(({default: page}) => {
          component = page
        })
      }
      return createElement(component, props)
    },
  }
});

export default routes
