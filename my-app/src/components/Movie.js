import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';
import axios from 'axios';

function Movie(props) {
    const [showModal, setShowModal] = useState(false);
    const [updateoverview, setupdateoverview] = useState(props.data.overview);

    const handleDeleteMovie = async () => {
        try {
            await axios.delete(`http://localhost:3001/movie/${props.data.id}`);
            props.onDeleteMovie(props.data.id); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
 

    const handleModal = () => {
        setShowModal(true);
    };
 

    const handleCloseModal = (editoverview) => {
        setShowModal(false);
        setupdateoverview(editoverview)
    };

    return (
        <div className="movie-list">
            <Card className="movie-card">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>{props.toupdate==="update"?updateoverview:props.data.overview}</Card.Text>
                    {props.page === 'home' && 
                        <Button variant="primary" onClick={handleModal}>Add Favorite</Button>
                    }
                    {props.page === 'favorite' &&  
                        <>
                            <Button variant="primary" onClick={handleModal}  >update</Button>
                            <Button variant="danger" onClick={handleDeleteMovie}>Delete</Button>
                        </>
                    }
                    <ModalMovie show={showModal} handleClose={handleCloseModal} data={props.data} toupdate={props.toupdate}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Movie;
