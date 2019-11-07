const meta = { auth: false }

export default {
  path: '/',
  name: 'demo-yplayer',
  component: () => import('@/pages/yplayer'),
  meta: {
    ...meta,
    title: '视频'
  }
}
