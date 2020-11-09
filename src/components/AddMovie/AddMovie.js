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
           
            <div className="titleInput">
                <label className="title" >Movie title:</label>
                    <input type="text" id="newMovieTitle" name="title" placeholder="title"
                    onChange={(event) => this.handleChange('title', event)}></input>
            </div>
            <br></br>


            <div className="posterInput">
                <label className="poster">Movie poster:</label>
                    <input type="text" id="newMoviePoster" name="poster" placeholder="url"
                    onChange={(event) => this.handleChange('poster', event)}></input>
            </div>
            <br></br>

            <div className="descriptionBox">
                <p>Movie description:</p>
                <textarea className="description" placeholder="description"
                    onChange={(event) => this.handleChange('description', event)}></textarea>
            </div>
                <br></br> 
 

            <div className="genreDrop">
                <label className="genres">Choose a genre: </label>
                    <select 
                        name="genres" id="genre" 
                        onChange={(event) => this.handleChange('genre_id', event)}
                    >
                        <option value=''>Select a genre: </option>
                            {this.props.reduxState.genres.map((genre) => {
                                return <option  key={genre.id} value={genre.id} >{genre.name}</option>
                        
                    })}
                </select>  
            
            </div>
            <br></br> 

                <button onClick={this.saveMovie}>Save</button>
                <button onClick={this.changePageBack}>Cancel</button>
    
            </form>


                
            </>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(AddMovie);