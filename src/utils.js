const getMoviesBySearchTerm = async (search) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    const data = await response.json()
    console.log(data);
}

getMoviesBySearchTerm('Lord')


const getMovieDetailsByID = async (id) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
    const data = await response.json()
    console.log(data);
}

getMovieDetailsByID(121)

export default utils.js