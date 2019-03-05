const meta = { auth: false }

export default {
  path: '/npm',
  name: 'demo-npm',
  component: () => import('@/pages/demo/npm'),
  meta: {
    ...meta,
    title: '测试插件'
  }
}
