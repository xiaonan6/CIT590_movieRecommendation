import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Movie, MovieList } from './MovieRecommendationStyle';


function MovieRecommendationByRating() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  const APIkey = 'bfd259d850a0aced58cfa4d3bb509bb6'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  return (
    <Container>
      <h1>Recommendation For You</h1>
      <h2>Top Rated Movies</h2>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
            <span className='rating'> Rating: {movie.vote_average}</span>
          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
}

export default MovieRecommendationByRating;