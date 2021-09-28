import './App.css';
import { useEffect, useState } from 'react'


import MovieCard from './components/MovieCard'



function App() {

  const [movies, setMovies] = useState([])

  const getMoviesBySearchTerm = async (search) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`)
    const data = await response.json()
    return data.Search
    console.log(data);
}

  useEffect(() => {
    getMoviesBySearchTerm('Lord of the Rings').then(movieList => {
      setMovies(movieList);
    })
  }, [])

  

  return (
    <div className='app'>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} title={movie.Title} type={movie.Type} poster={movie.Poster}/>
        ))}
    </div>
  )

}

export default App;
