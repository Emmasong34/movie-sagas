import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    render(){
        return(
            <div>
            console.log('in home component')
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Home);