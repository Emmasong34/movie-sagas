import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render(){
        return(
            console.log('in details component')
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Details);