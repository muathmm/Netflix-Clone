
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function ModalMovie(props) {
    

    const handleClickAddMovie = async () => {
        try {
          await axios.post('http://localhost:3001/movie', props.data);
        
            props.handleClose();
        } catch (error) {
            console.error('Error adding movie:', error);
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
                        <Card.Text>{props.data.overview}</Card.Text>
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