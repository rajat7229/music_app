import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm) {
            history.push(`/search?q=${searchTerm}`);
        }
    };

    return (
        <Form inline onSubmit={handleSearch}>
            <FormControl
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">Search</Button>
        </Form>
    );
};

export default SearchBar;
