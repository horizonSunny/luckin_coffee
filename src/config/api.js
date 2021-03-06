import { baseUrl } from './global'
import { Promise } from 'q'

const get = (url, data) => {
  const wholeUrl = baseUrl + url
  return uni
    .request({
      url: wholeUrl
    })
    .then(data => {
      var [error, res] = data
      console.log('in_api_', res.data)
      const responseData = new Promise((resolve, reject) => {
        resolve(res.data)
      })
      return responseData
    })
}

export { get }
