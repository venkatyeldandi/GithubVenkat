import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowList.css';

function ShowList() {
  const [shows, setShows] = useState([]);
  console.log("rendering showlist components");

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all")
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map(show => (
          <div key={show.show.id} className='show-align'>
          <li >
          {show.show.image ? (
              <img src={show.show.image.medium} alt={show.show.name} />
            ) : (
              <span>No image available</span>
            )}
            <button className='button'>
            <Link to={`/shows/${show.show.id}`}  >
              {show.show.name} ({show.show.network ? show.show.network.name : 'Unknown'})
            </Link>
            </button>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;    