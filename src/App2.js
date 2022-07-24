import { useEffect, useState } from 'react';
// key: 22214b2e
import './App.css';
import searchIcon from './search.svg';

import MovieCard2 from './components/MovieCard2';

const API_URL = 'https://www.omdbapi.com?apikey=22214b2e';

const App2 = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className='app'>
      <h1>MovieMania</h1>

      <div className='search'>
        <input placeholder='Search movies' value={''} onChange={() => {}} />

        <img src={searchIcon} alt='search' onClick={() => {}} />
      </div>

      <div className='container'>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard2 movie={movie} key={movie.imdbID} />)
        ) : (
          <div className='empty'>
            <h3>No movies found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App2;
