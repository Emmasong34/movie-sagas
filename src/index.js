import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_MOVIE_DETAILS', getMovieDetails);
}

function* getMovies() {
    try {
        const movieArray = yield axios.get('/api/genre');
        console.log('movieArray.data:', movieArray.data)
        yield put({ type: 'SET_MOVIES', payload: movieArray.data });
    } catch (error) {
        console.log('error getting movies from DB', error);
    }
}

function* getMovieDetails() {
     try {
         const genreArray = yield axios.get('/api/genre');
        console.log('in getMovieDetails:')
         yield put({ type: 'SET_GENRES', payload: genreArray.data });
     } catch (error) {
       console.log('error getting genres from DB', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
// movies are being stored here in reduxStore
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
