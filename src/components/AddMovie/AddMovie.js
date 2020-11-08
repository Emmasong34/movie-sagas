import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddMovie extends Component {

    changePageBack = () => {
        console.log('back to home');
        this.props.history.push('/');
    }

//     an input field (for the movie title)
// an input field (for the movie poster image URL))
// a textarea (for the movie description)
// a dropdown (for the genres)

    render(){
        return(
            <>
            <div className="addMovie buttons">
            {/* // console.log('in addmovie component') */}
          
            </div>
            
            <form>
            {/* <input>Movie title:</input> */}
            {/* <input>Movie poster:</input> */}
            <label for="title">Movie title:</label>
            <input type="text" id="movieTitle" name="title"></input>
            <br></br>
            <label for="poster">Movie poster:</label>
            <input type="text" id="moviePoster" name="poster"></input>
            <br></br>
            <textarea>Movie description:</textarea>
            <br></br>
            <label for="genres">Choose a genre:</label>
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