import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function MovieDetails() {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=14d639a0`)
    .then((res) => {
      console.log('res', res);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div>movie</div>
    </>
  )
}

export default MovieDetails;