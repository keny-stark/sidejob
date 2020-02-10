import React, {Component} from 'react';
import { Col, Form, FormGroup, Button } from 'reactstrap';
import {connect} from 'react-redux';
import { registerUser } from '../../store/actions/userActions';
import FormElement from '../../components/UI/Form/FormElement';


class Register extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        password_confirm: ''
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlerSubmit = event => {
        event.preventDefault();
        this.props.registerUser({...this.state})
    }

     render() {
        return (
            <Form onSubmit={this.handlerSubmit}>
            <h2>Регистрация</h2>
            <FormElement
              propertyName="email"
              title="Почта"
              type="email"
              value={this.state.email}
              name="email"
              onChange={this.changeHandler}
          />
            <FormElement
              propertyName="username"
              title="Логин"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.changeHandler}
          />
            <FormElement
              propertyName="password"
              title="Пароль"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.changeHandler}
          />
            <FormElement
              propertyName="password_confirm"
              title="Потверждение пароля"
              type="password"
              value={this.state.password2}
              name="password_confirm"
              onChange={this.changeHandler}
          />
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

const mapDispatchToProps = dispatch => ({
  registerUser: userData => dispatch(registerUser(userData))
})

export default connect(null, mapDispatchToProps)(Register)