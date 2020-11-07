import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    changePageBack = () => {
        console.log('back to home');
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
            {/* // console.log('in details component') */}
            <button onClick={this.changePageBack}>Back To Home</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Details);