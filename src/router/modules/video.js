const meta = { auth: false }

export default {
  path: '/video',
  name: 'study-video',
  component: () => import('@/pages/video/upload'),
  meta: {
    ...meta,
    title: ''
  }
}
