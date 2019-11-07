const meta = { auth: false }

export default {
  path: '/mathJax',
  name: 'mathJax',
  component: () => import('@/pages/demo/mathJax'),
  meta: {
    ...meta,
    title: ''
  }
}
