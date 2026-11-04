// 多语言支持：zh（中文，默认）/ en（English）
// 语言设置保存在 storage 的 lang_v1 中：auto | zh | en
import storage from '@system.storage'
import configuration from '@system.configuration'
import zh from './zh.js'
import en from './en.js'

var LANG_KEY = 'lang_v1'
var DICTS = { zh: zh, en: en }

var setting = 'auto'
var loaded = false

function systemLang() {
  try {
    var locale = configuration.getLocale()
    if (locale && locale.language && locale.language.toLowerCase().indexOf('zh') !== 0) {
      return 'en'
    }
  } catch (e) {}
  return 'zh'
}

function current() {
  if (setting === 'zh' || setting === 'en') return setting
  return systemLang()
}

function merge(a, b) {
  var out = {}
  var k
  for (k in a) out[k] = a[k]
  for (k in b) out[k] = b[k]
  return out
}

export default {
  // 读取语言设置，完成后回调（已读取过则立即回调）
  load(cb) {
    if (loaded) {
      if (cb) cb()
      return
    }
    function done() {
      loaded = true
      if (cb) cb()
    }
    storage.get({
      key: LANG_KEY,
      success: function(data) {
        if (data === 'zh' || data === 'en' || data === 'auto') setting = data
        done()
      },
      fail: done
    })
  },

  getSetting() {
    return setting
  },

  setSetting(value) {
    setting = value
    loaded = true
    storage.set({ key: LANG_KEY, value: value })
  },

  lang() {
    return current()
  },

  // 返回某页面的文案（合并 common），缺失的键回退到中文
  page(name) {
    var d = DICTS[current()]
    var base = merge(zh.common, zh[name] || {})
    if (d === zh) return base
    return merge(base, merge(d.common, d[name] || {}))
  }
}
