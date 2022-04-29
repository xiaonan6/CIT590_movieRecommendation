import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Movie, MovieList } from './HomePageStyle';


function GenreMovies() {
  const { id } = useParams()

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  const APIkey = 'bfd259d850a0aced58cfa4d3bb509bb6'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&language=en-US&sort_by=vote_average.dsc&with_genres=${id}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [id])
  console.log(id)
  console.log(`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&language=en-US&sort_by=vote_average.dsc&with_genres=${id}`)

  return (
    <Container>
      <h1>Recommended Movies</h1>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
            <span>{movie.vote_average}</span>
          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
}

export default GenreMovies;