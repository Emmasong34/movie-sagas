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
            {/* // console.log('in details component') */}
            <div className="detailsDisplay">
                {/* JSON.stringify is for testing purposes */}
                {/* {JSON.stringify.reduxState.genres} */}
            {this.props.reduxState.genres.map((genre) => {
                return <p>{genre.title}</p>
                
            })}
            </div>
            <button onClick={this.changePageBack}>Back To Home</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Details);