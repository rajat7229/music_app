import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { PlaylistCard } from './PlaylistCard';
import { MusicCard } from './MusicCard';
//import { RootState } from '../redux/store';

const HomePage: React.FC = () => {
  const [playlists, setPlaylists] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const playlistsData = useSelector((state: RootState) => state.playlists);
  const favoritesData = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    setPlaylists(playlistsData);
    setFavorites(favoritesData);
  }, [playlistsData, favoritesData]);

  return (
    <Container>
      <h2>My Playlists</h2>
      <Row>
        {playlists.map((playlist) => (
          <Col key={playlist.id} xs={12} md={6} lg={4}>
            <PlaylistCard playlist={playlist} />
          </Col>
        ))}
      </Row>
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

export default HomePage;
