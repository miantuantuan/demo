const meta = { auth: false }

export default {
  path: '/katex',
  name: 'demo-katex',
  component: () => import('@/pages/demo/welcome'),
  meta: {
    ...meta,
    title: '欢迎'
  }
}
