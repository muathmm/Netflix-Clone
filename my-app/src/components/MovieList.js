import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';

function MovieList(props) {
    const moviesList=props.data;
    const [movies, setMovies] = useState([]);
     useEffect(()=>
    {setMovies(moviesList)},[moviesList])
    const handleDeleteMovie = (movieId) => {
    
        const updatedMovies = movies.filter(movie => movie.id !== movieId);
        setMovies(updatedMovies);
        console.log(movies);
    };

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <Movie key={movie.id} data={movie} page={props.page} onDeleteMovie={handleDeleteMovie} toupdate={props.toupdate} />
            ))}
        </div>
    );
}

export default MovieList;
