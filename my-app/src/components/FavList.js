import axios from 'axios';
import MovieList from './MovieList';
import { useEffect, useState } from 'react';

function FavoriteList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const response = await axios.get('http://localhost:3001/movie');
            const data = await response.data;
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <MovieList data={data} page="favorite" toupdate="update" />
    );
}

export default FavoriteList;
