
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from'./Movie'

function MovieList(props) {
    const data=props.data;
    console.log(data);
    return (
    
        <div className="movie-list">
        {data.map((movie) => (
            <Movie key={movie.id} data={movie} />
        ))}
    </div>

    );
}

export default MovieList;