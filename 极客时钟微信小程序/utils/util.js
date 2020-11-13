const router = require('../config/router.js');

//打开目标页面
function NAV_TO(routerKey, params = null){
  if (params) {
    var querystring = '?';
    Object.keys(params).forEach(key => {
      querystring = querystring + key + '=' + params[key] + '&'
    })
    wx.navigateTo({
      url: router[routerKey.toUpperCase()] + querystring.slice(0, -1)
    })
  } else {
    wx.navigateTo({
      url: router[routerKey.toUpperCase()]
    })
  }
}

function formatTime(time, format) {
  let temp = '0000000000' + time
  let len = format.length
  return temp.substr(-len)
}

module.exports = {
  formatTime: formatTime,
  NAV_TO: NAV_TO
}