import axios from 'axios'
import firebase from 'firebase'

var api = axios.create({ baseURL: 'http://192.168.91.11:3001' })
var token = async () => {
  return await firebase.auth().currentUser?.getIdToken()
}
api.interceptors.request.use((req) => {
  req.headers.Authorization = token()
  return req
})

export { api }
