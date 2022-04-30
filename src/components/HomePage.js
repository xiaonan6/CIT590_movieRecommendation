import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Movie, MovieList } from './HomePageStyle';


function HomePage() {
  const navigate = useNavigate();
  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])
  const [searchMovieName, setSearchMovieName] = useState()
  const [searchMovieId, setSearchMovieId] = useState(0)

  const APIkey = 'bfd259d850a0aced58cfa4d3bb509bb6'

  const submitSearch = () => {
    navigate(`/details/${searchMovieId}`)
  }

  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${searchMovieName}`)
    .then(response => response.json())
    .then(data => {
      setSearchMovieId(data.results[0].id)
    })
  }, [searchMovieName])


  return (
    <Container>
      <h1>Search Movies</h1>
      <form action="/" method="get">
        {/* <label htmlFor="header-search">
            <span className="visually-hidden">Search Movies</span>
        </label> */}
        <input
            type="text"
            id="header-search"
            placeholder="Enter the movie name"
            name="s" 
            onChange={(event) => (setSearchMovieName(event.target.value))}
        />
        <button type="submit" onClick={() => (submitSearch())}>Search</button>
      </form>
      <h1>Popular Movies</h1>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
}

export default HomePage;
