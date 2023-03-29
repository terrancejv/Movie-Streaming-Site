import React from 'react';
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';

import './movie-stream.css';
import SearchIcon from './search.svg';

// 8fe7e912

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8fe7e912';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchEnterKey = (e) => {
      if (e.key === 'Enter') {
          searchMovies(searchTerm)
      }
  }

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = response.json();
    console.log(data)
    data.then((res) => {
      setMovies(res.Search);
    });
  }

  return (
    <div className = "app">
      <h1>123yourmom</h1>

      <div className = "search">
        <input 
          placeholder = "Search for Movies"
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={searchEnterKey}
        />

        <img
          src = {SearchIcon}
          alt = "search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className = "container">
          {movies.map((movie) => (
            <MovieCard movie = {movie}/>
          ))}
        </div>
      ) : (
        <div className = "empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div> 
  );
};

export default App;