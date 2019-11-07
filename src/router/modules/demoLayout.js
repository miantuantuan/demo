/**
 * Created by xixue on 2019/6/17.
 */
const meta = { auth: false }

export default {
  path: '/layout',
  name: 'layout',
  component: () => import('@/pages/demo/layout'),
  meta: {
    ...meta,
    title: 'demo'
  }
}
