//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from './MovieDetailsStyle';

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const APIkey = 'bfd259d850a0aced58cfa4d3bb509bb6'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      const {title, poster_path, release_date, overview, vote_average} = data
      const movie = {
        id,
        title,
        image: `${imagePath}${poster_path}`,
        overView: overview,
        releaseDate: release_date,
        voteAverage: vote_average
      }
      setMovie(movie)
    })
  }, [id])

  return (
    <Container>
      <div className="movie">
      <img src={movie.image} alt={movie.sinopse}/>
      <div className="details">
        <h1>{movie.title}</h1>
        <span>Overview: {movie.overView}</span>
        <span className='release-date'>Release date: {movie.releaseDate}</span>
        <span className='release-date'>Average Rating: {movie.voteAverage}</span>
        <Link to="/"><button>Go Back</button></Link>
      </div>
    </div>
    </Container>
  );
}

export default MovieDetails;
