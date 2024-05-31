import { lazy } from 'react';

export const routes = [
  {
    path: '/home',
    name: '首页',
    element: lazy(() => import('../pages/home'))
  },
  {
    path: '/firstTry',
    name: '初试',
    element: lazy(() => import('../pages/firstTry'))
  }
];