import request from './request.js'

export const login = (data) => {
  return request({
    url: 'http://127.0.0.1:4523/m1/1505156-0-default/user/',
    // method: 'POST',
    methods: 'GET',
    params: data
  })
}