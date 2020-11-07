import axios from 'axios';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {

state = {
    movieArray: []
}


componentDidMount = () => {
    this.getMovies();
}

getMovies = () => {
    axios({
        method: 'GET',
        url: '/api/genre'
    }).then((response) => {
        console.log(response.data);
        this.setState({
            movieArray: response.data
        });
        }).catch((error) => {
            console.log(error)
    })
}

    render(){
        return(
            <div>
            {this.state.movieArray.map((poster) => {
                return <button><img src={poster.poster}/></button>
            })}
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Home);