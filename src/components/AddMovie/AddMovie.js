import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {

    changePageBack = () => {
        console.log('back to home');
        this.props.history.push('/');
    }

    render(){
        return(
            <>
       
            <form className="form">
           
            <label className="title">Movie title:</label>
            <input type="text" id="movieTitle" name="title"></input>
            <br></br>

            <label className="poster">Movie poster:</label>
            <input type="text" id="moviePoster" name="poster"></input>
            <br></br>

            <textarea className="description">Movie description:</textarea>
            <br></br>

            <label className="genres">Choose a genre: </label>
            <select name="genres" id="genre">
                <option value="adventure">Adventure</option>
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
            <br></br>

            <button >Save</button>
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