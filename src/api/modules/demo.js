/**
 * Created by xixue on 2019/5/29.
 */
import request from '@/utils/axios'
export default {
  /**
   * 登录
   */
  upload (params) {
    return request('http://localhost:3000/upload', params)
  },
  fileUpload(fileobj) {
    let param = new FormData()
    param.append('files',fileobj.file)
    console.log(fileobj)
    return request({
      method: 'post',
      url: 'http://localhost:3000/upload',
      headers: {'Content-Type':'multipart/form-data'},
      data: param
    })
  }
}
