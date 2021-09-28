import React from 'react'

const MovieCard = ( {id, title, type, poster} ) => {
    return (
        <div className='movie-card' id={id}>
          
            <h2>{title}</h2>
            <img src={poster} />
            <button>{type}</button>
            
        </div>
        
    )
}

export default MovieCard

