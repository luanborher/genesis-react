import axios from "axios";

var api = axios.create({'baseURL' : 'http://192.168.91.11:3001'})
var token = ''
api.interceptors.request.use((req) => {
    req.headers.Authorization = 'Bearer ' + token
    return req
})

export {api}