import {pics} from 'apis'

export const picurl = function (val) {
  if (!val) {
    return ''
  }
  const url = pics.url(val)
  return url
}
