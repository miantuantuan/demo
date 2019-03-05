const storage = {}

/**
 * @description 存储 storage 值
 * @param {String} name storage name
 * @param {String} value storage value
 * @param {Object} setting storage setting
 */

storage.set = function (name = 'default', value = '', cookieSetting = {}) {
  sessionStorage.setItem(`v3-${name}`, value)
}

/**
 * @description 拿到 storage 值
 * @param {String} name storage name
 */
storage.get = function (name = 'default') {
  return sessionStorage.getItem(`v3-${name}`)
}

/**
 * @description 删除 storage
 * @param {String} name storage name
 */
storage.remove = function (name = 'default') {
  return sessionStorage.removeItem(`v-${name}`)
}

/**
 * @description 删除 全部 storage
 * @param {String}
 */
storage.remove = function () {
  return sessionStorage.clear()
}

export default storage
