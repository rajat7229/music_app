import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { MusicCard } from './MusicCard';
//import { RootState } from '../redux/store';

const FavoritesPage: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <Container>
      <h2>My Favorites</h2>
      <Row>
        {favorites.map((favorite) => (
          <Col key={favorite.id} xs={12} md={6} lg={4}>
            <MusicCard music={favorite} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
