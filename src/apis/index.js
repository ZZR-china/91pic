let host = 'http://112.74.34.241:3000'

export const albums = {
  index: host + '/albums?limit=6',
  pics: function (id) {
    return host + '/albums/' + id + '/pics'
  }
}
