const axios = require('axios');

const urlApi = 
    window.location.hostname === 'localhost'
    ? 'dinfoschool.web-developer.pw'
    : window.location.hostname;

const instance = axios.create({
    baseURL: 'http://' + urlApi,
    timeout: 3000
});

module.exports = instance;