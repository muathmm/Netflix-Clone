import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieList.css';
import { useState } from 'react';
import ModalMovie from './ModalMovie';
function Movie(props) {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

 
    
    return (
       

        <div className="movie-list">
        <Card className="movie-card">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text>{props.data.overview}</Card.Text>
                <Button variant="primary" onClick={handleModal}>Add Favorate</Button>
                <ModalMovie show={showModal} handleClose={handleCloseModal} data={props.data}/>
            </Card.Body>
        </Card>
    
    </div>

    );
}

export default Movie;