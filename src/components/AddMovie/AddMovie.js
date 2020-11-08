import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {

    componentDidMount{
        fetchGrenres();
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

    render(){
        return(
            <>
            <p>{JSON.stringify(this.state)}</p>

            <form className="form">
           
            <label className="title">Movie title:</label>
            <input type="text" id="newMovieTitle" name="title" 
             onChange={(event) => this.handleChange('title', event)}></input>
            <br></br>

            <label className="poster">Movie poster:</label>
            <input type="text" id="newMoviePoster" name="poster" 
             onChange={(event) => this.handleChange('poster', event)}></input>
            <br></br>

            {/* <textarea className="description" ></textarea>
            <br></br>
 
            <label className="genres">Choose a genre: </label>
            <select name="genres" id="genre">
                <option value="id">Adventure</option> keyname event handlechange
                <option value="animated">Animated</option>
                <option value="biographical">Biographical</option>
                <option value="comedy">Comedy</option>
                <option value="disaster">Disaster</option>
                <option value="drama">Drama</option>
                <option value="epic">Epic</option>
                <option value="fantasy">Fantasy</option>
                <option value="musical">Musical</option>
                <option value="romantic">Romantic</option>
                <option value="science fiction">Science Fiction</option>
                <option value="space-opera">Space-Opera</option>
                <option value="superhero">Superhero</option>
            </select>
            <br></br> */}

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