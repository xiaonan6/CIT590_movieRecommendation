import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'

import HomePage from './components/HomePage';
import MovieDetails from './components/MovieDetails';
import MovieRecommendationByRating from './components/MovieRecommendationByRating';
import Navigation from './components/Navigation';
import MovieRecommendationByGenres from './components/MovieRecommendationByGenres';
import GenreMovies from './components/GenreMovies';

const App = () => {
    return (
        <div className="app">
        <Navigation></Navigation>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/recommendationByRating" element={<MovieRecommendationByRating/>}/>
              <Route path="/recommendationByGenres" element={<MovieRecommendationByGenres/>}/>
              <Route path="/details/:id" element={<MovieDetails/>}/>
              <Route path="/genreMovies/:id" element={<GenreMovies/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      );
}
export default App;
