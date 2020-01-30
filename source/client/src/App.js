import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import  CustomersService  from  './CustomerService';
const customersService  =  new CustomersService();
class App extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    customersService.getCustomers().then((result) => {
      console.log(result.data)
        this.setState({
          list: result.data
        })
    })
}
  render() {
    return (
          <Card body>
            {this.state.list.map(item => (
              <CardTitle>{item.first_name}</CardTitle>

            ))}
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
    );
  }

}

export default App;
