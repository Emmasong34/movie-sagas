
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {


componentDidMount = () => {
    this.getMovies();
}

getMovies = () => {
    this.props.dispatch({ type: 'GET_MOVIES'})
}

goToDetails = () => {
    console.log('go to details page');
    this.props.history.push('/details');
}

handleClick = (movieClicked) => {
    console.log('clicked')
    console.log('movieClicked:', movieClicked.id)
    this.props.dispatch({type: 'GET_MOVIE_DETAILS', payload: movieClicked});
    this.goToDetails();
}

goToAddMovie = () => {
    console.log('go to addMovie page');
    this.props.history.push('/addMovie');
}

handleClickAdd = () => {
    console.log('clicked')
    this.goToAddMovie();
}
    render(){
        return(
            <>
                <div> <button onClick={this.handleClickAdd}>add movie</button></div>
                <div className="posterDisplay">
                    {/* JSON.stringify is for testing purposes */}
                    {/* {JSON.stringify.reduxState.movies} */}
                        {this.props.reduxState.movies.map((movie) => {
                            return <button className="button" key={movie.title} onClick={() => {this.handleClick(movie)}}>
                    <h2>{movie.title}</h2>
                        <img className="image" src={movie.poster}/>
                        </button>
                    })}
                </div>
            </>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Home);