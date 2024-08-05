// App.js
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import DefaultHOC from './HOC/default.hoc'; // Import DefaultHOC
import MovieHOC from './HOC/movie.hoc';

import HomePage from './pages/pages.homepage';
import MoviePage from './pages/pages.movie';
import PlaysPage from './pages/pages.plays';


//axios
import axios from 'axios';


//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultHOC tempFunction= {HomePage }/>} />
      <Route path = "/movie/:id" element={<MovieHOC tempFunction={MoviePage}/>} />
      <Route path = "/plays" element={<MovieHOC tempFunction={PlaysPage}/>} />
    </Routes>
  );
}

export default App;
