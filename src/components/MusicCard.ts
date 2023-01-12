import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
//import { toggleFavorite } from '../redux/actions';

interface MusicCardProps {
  music: {
    id: number,
    title: string,
    artist: string,
    coverImage: string,
    isFavorite: boolean
  }
}

const MusicCard: React.FC<MusicCardProps> = ({ music }) => {
  const dispatch = useDispatch();

  return (
    <Card className='mb-3'>
      <Card.Img variant='top' src={music.coverImage} />
      <Card.Body>
        <Card.Title>{music.title}</Card.Title>
        <Card.Text>{music.artist}</Card.Text>
        <Button
          variant={music.isFavorite ? 'danger' : 'secondary'}
          onClick={() => dispatch(toggleFavorite(music.id))}
        >
          {music.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MusicCard;
