import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Movie, MovieList } from './MovieRecommendationStyle';


function MovieRecommendationByGenres() {

  const [genres, setGenres] = useState([])

  const APIkey = 'bfd259d850a0aced58cfa4d3bb509bb6'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
        setGenres(data.genres)
    })
  }, [])

  return (
    <Container>
      <h1>Recommendation For You</h1>
      <h2>Movie Genres</h2>
      <MovieList>
      {genres.map(genre => {
          console.log(genre.id);
        return (
          <Movie key={genre.id}>
            <Link to={`/genreMovies/${genre.id}`}>
                <span>{genre.name}</span>
            </Link>
          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
}

export default MovieRecommendationByGenres;