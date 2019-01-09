import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Containers
import Navbar from './containers/Navbar';
import Todo from './containers/Todo';
import Fetch from './containers/Fetch';
import Hero from './containers/Hero';
import NotFound from './containers/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Todo} />
            <Route path='/hero/:name' exact component={Hero} />
            <Route path='/fetch' exact component={Fetch} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
