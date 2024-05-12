import { useState,useEffect } from "react";
import axios from 'axios';
import MovieList from './MovieList'
import './MovieList.css';
function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try {
            const response = await axios.get('http://localhost:3001/trending');
            const data=await response.data
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        
        
                <MovieList  data={data} />

    
    );
}

export default Home;