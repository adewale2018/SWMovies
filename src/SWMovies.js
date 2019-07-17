import React, {useState, useEffect } from 'react';
import axios from 'axios';

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect( () => {
    async function fetchData(){
      const response = await axios.get(`https://swapi.co/api/films/${number}`);
      setMovie(response.data);
      console.log(response.data);
    }
    fetchData();
  }, [number]);
  return(
    <div>
      <label>Choose A Movie</label>
      <select value={number} onChange={(e)=> setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <h3>Title: {movie.title}</h3>
      <p>{movie.opening_crawl}</p>
      <h4>Directed By: {movie.director}</h4>
      <h4>Produced By: {movie.producer}</h4>
      <h4>Released Date: {movie.release_date}</h4>
      <h4>Episode ID: {movie.episode_id}</h4>
    </div>
  );
}

export default SWMovies;
