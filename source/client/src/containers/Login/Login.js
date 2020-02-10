import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Col, Form, FormGroup, Button } from 'reactstrap';
import FormElement from '../../components/UI/Form/FormElement';
import {loginUser} from '../../store/actions/userActions'


class Login extends Component {

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
        this.props.loginUser({...this.state})
    }

    register = event => {
        event.preventDefault();
        this.props.history.push('/register')
    }

    render() {
        return (
            <Form onSubmit={this.handlerSubmit} >
            <h2>Вход</h2>
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
            <FormGroup row>
                <Col sm={{offset: 2, size: 10}}>
                    <Button type="submit" color="primary">
                        Войти
                    </Button>
                    <Button onClick={this.register} style={{marginLeft: "10px"}} type="button" color="success">
                        Зарегистрироваться
                    </Button>
                </Col>
            </FormGroup>
            </Form>
         )
    }

}

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
})

export default connect(null, mapDispatchToProps)(Login)