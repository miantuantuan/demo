const meta = { auth: false }

export default {
  path: '/welcome',
  name: 'demo-welcome',
  component: () => import('@/pages/welcome'),
  meta: {
    ...meta,
    title: '欢迎'
  }
}
