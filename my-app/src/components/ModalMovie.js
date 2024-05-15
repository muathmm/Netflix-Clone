import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function ModalMovie(props) {
    const [editedOverview, setEditedOverview] = useState(props.data.overview);

    const handleEditOverview = (e) => {
        setEditedOverview(e.target.value);
    };

    const handleClickAddMovie = async () => {
        try {
            if (props.toupdate === "update") {
                await axios.put(`http://localhost:3001/movie/${props.data.id}`, { 
                    title: props.data.title,
                    release_date:props.release_date,
                    poster_path:`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`,    
                overview: editedOverview });
            } else {
                await axios.post('http://localhost:3001/movie', props.data);
            }
            props.handleClose(editedOverview);
        } catch (error) {
            console.error('Error adding/updating movie:', error);
        }
    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className="movie-card">
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} />
                    <Card.Body>
                        {props.toupdate === "update" ? 
                            <>
                                <input type="text" name="comment" value={editedOverview} onChange={handleEditOverview} />
                            </>
                            : <Card.Text>{props.data.overview}</Card.Text>
                        }
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClickAddMovie}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalMovie;
