import axios from 'axios'
const API_URL = 'http://localhost:8000';

export default class CustomersService {
    constructor(){}

    getCustomers() {
        const url = `${API_URL}/api/source/`;
        return axios.get(url).then(response => response.data);
    }  

}