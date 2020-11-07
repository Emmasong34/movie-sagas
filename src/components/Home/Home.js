import axios from 'axios';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {

// state = {
//     movieArray: []
// }


componentDidMount = () => {
    this.getMovies();
}

getMovies = () => {
    this.props.dispatch({ type: 'GET_MOVIES' })
}


    render(){
        return(
            <div>
                {/* {JSON.stringify.reduxState.movies} */}
            {this.props.reduxState.movies.map((movie) => {
                return <button>
                   <h2> {movie.title}</h2>
                    <img src={movie.poster}/>
                    </button>
            })}
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Home);