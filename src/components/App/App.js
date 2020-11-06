import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Home from '../Home/Home';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>

        <Route exact path="/" component={Home}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/addMovie" component={AddMovie}/>
        
        </Router>
        </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState 
});
export default connect(putReduxStateOnProps)(App);
