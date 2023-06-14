import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowDetails.css';
import { useParams } from 'react-router-dom';

function ShowDetails(props) {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  console.log("helo");
  useEffect(() => {
    if (id) {
      axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then(response => {
          console.log(response.data)
          setShow(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);

  if (!show) {
    return <div className='loader' ></div>;
  }

  return (
    <div >
      <h1>{show.name}</h1>
      <div className='summary-body'>
        <div className='book'>
          <img src={show.image?.medium} alt={show.name} />
          <button>Book Tickets</button>
        </div>
        <div className='summay' >
          <b>ABOUT MOVIE</b><br></br>
          <p>{show.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;