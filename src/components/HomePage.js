import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Movie, MovieList } from './HomePageStyle';


function HomePage() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  const APIkey = 'bfd259d850a0aced58cfa4d3bb509bb6'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  return (
    <Container>
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
