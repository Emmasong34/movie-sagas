
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {


componentDidMount = () => {
    this.getMovies();
}

//gets movie data from database
getMovies = () => {
    this.props.dispatch({ type: 'GET_MOVIES'})
}

//routes to details component
goToDetails = () => {
    console.log('go to details page');
    this.props.history.push('/details');
}

//choosing movie to display details for, details are coming from redux store
handleClick = (movieClicked) => {
    console.log('clicked')
    console.log('movieClicked:', movieClicked.id)
    this.props.dispatch({type: 'GET_MOVIE_DETAILS', payload: movieClicked});
    this.goToDetails();
}

//routes to addMovie component
goToAddMovie = () => {
    console.log('go to addMovie page');
    this.props.history.push('/addMovie');
}

    render(){
        return(
            <>
                <div> <button onClick={this.goToAddMovie}>add movie</button></div>
                <div className="posterDisplay">
                    {/* JSON.stringify is for testing purposes */}
                    {/* {JSON.stringify.reduxState.movies} */}
                        {this.props.reduxState.movies.map((movie) => {
                            return <button className="button" key={movie.title} onClick={() => {this.handleClick(movie)}}>
                                    <img className="image" alt="movie poster" src={movie.poster}/>
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