import React,{Component} from 'react';
import {Toolbar} from './components/UI/Toolbar/Toolbar'
import {Switch, Route } from 'react-router-dom';
import Register from './containers/Rgister/Register';
import Login from './containers/Login/Login';
import {Container} from 'reactstrap';
import {connect} from 'react-redux'
import {logoutUser} from './store/actions/userActions'
import {withRouter} from "react-router-dom";
import Signboard from './containers/Signboard/Signboard';
class App extends Component {

  
  render() {
    return (
      <>
        <Toolbar user={this.props.user} logout={this.props.logoutUser}/>

        <Container>
          <Switch>
          <Route path="/" exact component={Signboard}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          </Switch>
        </Container>
      </>  
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user
})

const mapDispatchToProps = dispatch => ({
  logoutUser: (user) => dispatch(logoutUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
