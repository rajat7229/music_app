import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { createPlaylist, deletePlaylist } from '../redux/actions';
import { PlaylistCard } from './PlaylistCard';
//import { RootState } from '../redux/store';

const PlaylistsPage: React.FC = () => {
  const playlists = useSelector((state: RootState) => state.playlists);
  const [showModal, setShowModal] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setPlaylistName('');
    setPlaylistDescription('');
  }, [showModal]);

  const handleCreatePlaylist = () => {
    if (!playlistName) {
      return;
    }
    dispatch(createPlaylist({ name: playlistName, description: playlistDescription }));
    setShowModal(false);
  };

  const handleDeletePlaylist = (id: number) => {
    dispatch(deletePlaylist(id));
  };

  return (
    <Container>
      <h2>My Playlists</h2>
      <Row>
        {playlists.map((playlist) => (
          <Col key={playlist.id} xs={12} md={6} lg={4}>
            <PlaylistCard playlist={playlist} onDelete={handleDeletePlaylist} />
          </Col>
        ))}
      </Row>
      <Button variant='primary' as={Link} to='/playlists/create' onClick={() => setShowModal(true)}>
        Create Playlist
        </Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className='form-group'>
                <label htmlFor='playlistName'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='playlistName'
                  value={playlistName}
                  onChange={(e) => setPlaylistName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='playlistDescription'>Description</label>
                <textarea
                  className='form-control'
                  id='playlistDescription'
                  value={playlistDescription}
                  onChange={(e) => setPlaylistDescription(e.target.value)}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant='primary' onClick={handleCreatePlaylist}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  };
  
  export default PlaylistsPage;
  