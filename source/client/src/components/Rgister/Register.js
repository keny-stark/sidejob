import React, {Component} from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import CustomersService from '../../CustomerService';

const customersService  =  new CustomersService();

class Register extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        password2: ''
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlerSubmit = event => {
        event.preventDefault();
        customersService.createUser({...this.state}).then(result => {
            console.log(result, 'result')
        })
    }

     render() {
        return (
            <Form onSubmit={this.handlerSubmit}>
            <h2>Регистрация</h2>
            <FormGroup row>
              <Label sm={2}>Почта</Label>
              <Col sm={10}>
                <Input type="email" name="email" value={this.state.email} onChange={this.changeHandler}  placeholder="Почта" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label  sm={2}>Логин</Label>
              <Col sm={10}>
                <Input type="text" name="username" value={this.state.username} onChange={this.changeHandler}  placeholder="Логин" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>Пароль</Label>
              <Col sm={10}>
                <Input type="password" name="password" value={this.state.password} onChange={this.changeHandler}  placeholder="Пароль" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword2" sm={2}>Потверждение пароля</Label>
              <Col sm={10}>
                <Input type="password" value={this.state.password2} onChange={this.changeHandler} name="password2" id="examplePassword" placeholder="Потверждение пароля" />
              </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={{offset: 2, size: 10}}>
                    <Button type="submit" color="primary">
                        регистрация
                    </Button>
                </Col>
            </FormGroup>
            </Form>
        )
    }
}

export default Register