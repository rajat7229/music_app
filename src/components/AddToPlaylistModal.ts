import React, { useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
//import { RootState } from '../redux/store';
//import { addToPlaylist } from '../redux/actions';

interface Props {
  show: boolean;
  onClose: () => void;
  musicId: string;
}

const AddToPlaylistModal: React.FC<Props> = ({ show, onClose, musicId }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState('');
  const playlists = useSelector((state: RootState) => state.playlists);
  const dispatch = useDispatch();

  const handleAddToPlaylist = () => {
    if (!selectedPlaylist) {
      return;
    }
    dispatch(addToPlaylist(musicId, selectedPlaylist));
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add to Playlist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Playlist</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="secondary">
                {selectedPlaylist || 'Select a playlist'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {playlists.map((playlist) => (
                  <Dropdown.Item
                    key={playlist.id}
                    onClick={() => setSelectedPlaylist(playlist.id)}
                  >
                    {playlist.name}
                  </Dropdown.Item>
                ))}
                </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddToPlaylist}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      );
    };
    
    export default AddToPlaylistModal;
    
             
