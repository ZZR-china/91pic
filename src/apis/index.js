let host = 'http://112.74.34.241:3000'

export const albums = {
  index: host + '/albums',
  pics: function (id) {
    return host + '/albums/' + id + '/pics'
  }
}

export const pics = {
  index: host + '/pics',
  url: function (url) {
    return host + '/pics/url?url=' + url
  }
}

export const categories = {
  index: host + '/categories'
}
