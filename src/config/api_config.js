import axios from 'axios'

export const authServiceBaseURL = 'http://school-auth-service.local/'
export const commonServiceBaseURl = 'http://school-common-service.local/'


// Handling server error
const errorHandler = (error) => {
    if (error.response === undefined) {
      return error
    } else if (error.response.status === 401) {
      // Store.dispatch('Auth/updateAuthUser', null)
      // Store.commit('mutateCommonProperties', {
      //   hasDropdownLoaded: false
      // })
      window.vm.$router.push({ path: `/error-page?code=${401}` }).catch()
    } else if (error.response.status === 500) {
    //   Store.commit('mutateCommonProperties', {
    //     loading: false,
    //     listReload: false
    //   })
      // window.vm.$router.push({ path: `/error-page?code=${500}` }).catch()
    } else {
      // window.vm.$router.push({ path: '/error-page?code=unknown' }).catch()
    }
    return error
  }
  export default {
    async execute (baseUrl, method, uri, data, params = {}, pdf = false) {
    //   const accessToken = Store.state.Auth.accessToken
      // const client = axios.create({
      //   baseURL: baseUrl,
      //   json: true
      // })
      let client = []
      if (pdf) {
        client = axios.create({
          baseURL: baseUrl,
          responseType: 'blob'
        })
      } else {
        client = axios.create({
          baseURL: baseUrl,
          json: true
        })
      }
  
      client.interceptors.response.use(response => response, error => errorHandler(error))
      return client({
        method,
        url: uri,
        data,
        params: params,
        // headers: {
        //   Authorization: accessToken ? `Bearer ${accessToken}` : '',
        //   accessUsername: Store.state.Auth.accessUsername,
        //   accessUserId: Store.state.Auth.accessUserId,
        //   accessMenuName: window.location.href
        // }
      }).then(req => {
        return req.data
      })
    },
    getData (baseUrl, uri, params = {}) {
      // const filters = setFilters()
      return this.execute(baseUrl, 'get', uri, {}, params)
    },
    getPdfData (baseUrl, uri, params = {}) {
      // const filters = setFilters()
      return this.execute(baseUrl, 'get', uri, {}, params, true)
    },
    postData (baseUrl, uri, data) {
      return this.execute(baseUrl, 'post', uri, data)
    },
    putData (baseUrl, uri, data) {
      return this.execute(baseUrl, 'put', uri, data)
    },
    deleteData (baseUrl, uri) {
      return this.execute(baseUrl, 'delete', uri)
    }
  }
  
  