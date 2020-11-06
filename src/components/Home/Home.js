import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    render(){
        return(
            console.log('in home component')
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Home);