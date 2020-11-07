import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    componentDidMount = () => {
        this.getGenres();
    }
    
    getGenres = () => {
        this.props.dispatch({ type: 'GET_GENRES' })
    }


    changePageBack = () => {
        console.log('back to home');
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
         
            
            <button onClick={this.changePageBack}>Back To Home</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Details);