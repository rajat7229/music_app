import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
//import { searchMusic } from '../redux/actions';
import { MusicCard } from './MusicCard';
//import { RootState } from '../redux/store';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = useSelector((state: RootState) => state.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchMusic(searchTerm));
    }
  }, [searchTerm]);

  return (
    <Container>
      <div className='form-group'>
        <label htmlFor='searchTerm'>Search</label>
        <input
          type='text'
          className='form-control'
          id='searchTerm'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Row>
        {searchResults.map((result) => (
          <Col key={result.id} xs={12} md={6} lg={4}>
            <MusicCard music={result} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchPage;