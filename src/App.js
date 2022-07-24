// // key: 22214b2e
// import { useEffect, useState } from 'react';

// import './App.css';
// import searchIcon from './search.svg';
// import MovieCard from './components/MovieCard';

// const API_URL = 'https://www.omdbapi.com?apikey=22214b2e';

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const searchMovies = async (title) => {
//     const res = await fetch(`${API_URL}&s=${title}`);
//     const data = await res.json();

//     setMovies(data.Search);
//   };

//   useEffect(() => {
//     searchMovies();
//   }, []);

//   return (
//     <div className='app'>
//       <h1>MovieMania</h1>

//       <div className='search'>
//         <input
//           placeholder='Search for movies'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <img
//           src={searchIcon}
//           alt='search'
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       <div className='container'>
//         {movies.length > 0 ? (
//           movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)
//         ) : (
//           <div className='empty'>
//             <h2>No movies found</h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
