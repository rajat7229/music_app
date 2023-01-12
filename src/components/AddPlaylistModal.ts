import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
//import { createPlaylist } from '../redux/actions';

interface Props {
    show: boolean;
    onClose: () => void;
}

const AddPlaylistModal: React.FC<Props> = ({ show, onClose }) => {
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');
    const dispatch = useDispatch();

    const handleCreatePlaylist = () => {
        if (!playlistName) {
            return;
        }
        dispatch(createPlaylist({ name: playlistName, description: playlistDescription }));
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={playlistDescription}
                            onChange={(e) => setPlaylistDescription(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCreatePlaylist}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddPlaylistModal;
