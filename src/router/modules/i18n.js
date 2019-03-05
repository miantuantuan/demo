const meta = { auth: false }

export default {
  path: '/i18n',
  name: 'demo-i18n',
  component: () => import('@/pages/demo/i18n'),
  meta: {
    ...meta,
    title: '语言切换'
  }
}
