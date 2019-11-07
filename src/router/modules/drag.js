/**
 * Created by xixue on 2019/6/17.
 */
const meta = { auth: false }

export default {
  path: '/drag',
  name: 'drag',
  component: () => import('@/pages/demo/drag'),
  meta: {
    ...meta,
    title: 'drag'
  }
}
