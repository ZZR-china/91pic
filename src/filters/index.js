import {pics} from 'apis'

export const picurl = function (val) {
  if (!val) {
    return ''
  }
  const url = pics.url(val)
  // console.log('val', url)
  return url
}

export const ishot = function (val) {
  if (!val) {
    return ''
  }
  val = Number(val)
  val = val < 20000000 ? '' : '火爆'
  return val
}

export const isnull = function (val) {
  if (!val && val < 20000) {
    return '20万+'
  }
  let str = val.toString()
  const len = str.length
  str = str.substring(0, len - 4)
  return str + '万+'
}
