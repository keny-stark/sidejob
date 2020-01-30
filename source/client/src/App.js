import React, { Component } from 'react';
import  CustomersService  from  './CustomerService';
const  customersService  =  new  CustomersService();
class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    customersService.getCustomers().then((result) => {
        console.log(result.data)
    })
}
  render() {
    return (
      <div></div>
    );
  }

}

export default App;
