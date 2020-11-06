import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {

    changePageBack = () => {
        console.log('back to home');
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
            // console.log('in addmovie component')
            <button >Save</button>
            <button onClick={this.changePageBack}>Cancel</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(AddMovie);