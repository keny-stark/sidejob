import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";


const instance = axios.create({
    baseURL: 'http://localhost:8000'
})

export default instance;