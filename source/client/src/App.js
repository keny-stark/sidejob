import React,{Component} from 'react';
import {Toolbar} from './components/UI/Toolbar/Toolbar'
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Register from './components/Rgister/Register';
import Login from './components/Rgister/Login';
import {Container} from 'reactstrap'


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Toolbar/>
            <Container>
              <Switch>

              <Route path="/login" exact component={Login}/>
              <Route path="/register" exact component={Register}/>
              </Switch>
            </Container>
        </BrowserRouter>
      </>  
    );
  }

}

export default App;
