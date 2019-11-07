/**
 * Created by xixue on 2019/6/17.
 */
const meta = { auth: false }

export default {
  path: '/computed',
  name: 'computed',
  component: () => import('@/pages/demo/computed'),
  meta: {
    ...meta,
    title: 'demo'
  }
}
