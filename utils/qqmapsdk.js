import QQMapWX from '../../static/js/qqmap-wx-jssdk'
import {config} from './index'
let { mapkey } = config
let qqmapsdk = new QQMapWX({
  key: mapkey
})

export function analysis (latitude, longitude) {
  return new Promise(function (resolve, reject) {
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        resolve(
          {
            address: res.result.address,
            code: res.result.ad_info.city_code.slice(3)
          }
        )
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}

export default qqmapsdk
