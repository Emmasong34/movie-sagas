import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {
    render(){
        return(
            console.log('in addmovie component')
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(AddMovie);