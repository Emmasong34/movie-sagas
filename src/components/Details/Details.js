import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    //routes back to home page
    changePageBack = () => {
        console.log('back to home');
        this.props.history.push('/');
    }

    render(){
        return(
            <div className="detailsDisplay">
         
         {/* maps through genre reducer to get movie details */}
         {this.props.reduxState.genres.map((movie) => {
                return <div  key={movie.id} className="movieDetails">
                   <h2>{movie.title}</h2>
                   <img className="image" alt="movie poster" src={movie.poster}/>
                   <h3>{movie.name}</h3>
                   <p>{movie.description}</p>
                    </div>
            })}


            <button onClick={this.changePageBack}>Back To Home</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Details);