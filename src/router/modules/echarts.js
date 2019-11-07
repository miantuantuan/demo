const meta = { auth: false }

export default {
  path: '/echarts',
  name: 'echarts',
  component: () => import('@/pages/demo/index'),
  meta: {
    ...meta,
    title: ''
  }
}
