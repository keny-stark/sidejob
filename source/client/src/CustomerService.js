import axios from 'axios'
const API_URL = 'http://localhost:8000';

export default class CustomersService {
    constructor(){}

    getCustomers() {
        const url = `${API_URL}/api/customers/`;
        return axios.get(url).then(response => response.data);
    }
    
    createUser(data) {
        console.log(data, 'data');
        
        const url = `${API_URL}/register/`;
        return axios.post(url, data);
    }

}