import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface PlaylistCardProps {
  playlist: {
    id: number,
    name: string,
    description: string,
    coverImage: string,
    songs: number
  }
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <Card className='mb-3'>
      <Card.Img variant='top' src={playlist.coverImage} />
      <Card.Body>
        <Card.Title>{playlist.name}</Card.Title>
        <Card.Text>{playlist.description}</Card.Text>
        <Button variant='primary' as={Link} to={`/playlists/${playlist.id}`}>View Playlist</Button>
        <Button variant='secondary' className='ml-2'>{playlist.songs} songs</Button>
      </Card.Body>
    </Card>
  );
};

export default PlaylistCard;
