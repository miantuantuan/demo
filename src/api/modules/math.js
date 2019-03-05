/**
 * Created by xixue on 2019/2/28.
 */
import request from '@/utils/axios'
export default {
  /**
   * 登录
   */
  login (params) {
    return request('/login/loginin', params)
  }
}
