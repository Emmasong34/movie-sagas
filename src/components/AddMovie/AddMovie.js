import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {

    componentDidMount = () => {
        this.fetchGenres();
    }

    changePageBack = () => {
        console.log('back to home');
        this.props.history.push('/');
    }

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: 1
        }
    }

    saveMovie = () => {
          this.props.dispatch({type: 'ADD_MOVIE', payload: this.state})
    }

    handleChange = (typeOfKey, event) => {
        event.preventDefault();
        // console.log('handleChange event', event)
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [typeOfKey]: event.target.value,
            }
        });
    }

    fetchGenres = () => {
        this.props.dispatch({type: 'FETCH_GENRES'})
    }

    render(){
        return(
            <>

            <form className="form">
           

                <label className="title">Movie title:</label>
                    <input type="text" id="newMovieTitle" name="title" 
                    onChange={(event) => this.handleChange('title', event)}></input>
            <br></br>


                <label className="poster">Movie poster:</label>
                    <input type="text" id="newMoviePoster" name="poster" 
                    onChange={(event) => this.handleChange('poster', event)}></input>
            <br></br>
                <p>Movie description:</p>
                <textarea className="description" 
                    onChange={(event) => this.handleChange('description', event)}></textarea>
                <br></br> 
 

            <div>
                <label className="genres">Choose a genre: </label>
                    <select 
                        name="genres" id="genre" 
                        onChange={(event) => this.handleChange('genre_id', event)}
                    >
                        <option value=''>Select a genre: </option>
                            {this.props.reduxState.genres.map((genre) => {
                                return <option  value={genre.id} >{genre.name}</option>
                        
                    })}
                </select>  
            <br></br> 
            </div>

                <button onClick={this.saveMovie}>Save</button>
    
            </form>


                <button onClick={this.changePageBack}>Cancel</button>
            </>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(AddMovie);