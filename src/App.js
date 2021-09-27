
import './App.css';
import { useEffect, useState } from 'react'


import MovieCard from './components/MovieCard'



function App() {

  const [movies, setMovies] = useState([])

  const getMoviesBySearchTerm = async (search) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`)
    const data = await response.json()
    console.log(data);
}

  useEffect(() => {
    getMoviesBySearchTerm('Lord of the Rings').then(movieList => {
      setMovies(movieList);
    })
  }, [])

  

  return (
    <div>
      <h1>OMDb Movies</h1>

      <div className='movie-list'>
        
      </div>
    </div>
  )

}

export default App;
