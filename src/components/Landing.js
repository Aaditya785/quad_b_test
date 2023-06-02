import React, { useEffect, useState } from 'react';
import MovieItem from '../pages/MovieItem';
import "./Landing.css"

const Landing = () => {
  const [data, setData] = useState([]);

  // fetch data when page loads
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const res = await req.json();
      setData(res);
      console.log("from landing:- ",data)
    };
    fetchData();
  }, []);

  return (
    <div className='main'> 
      {data.map((item) => {
        console.log(item.show);
        return <MovieItem item={item} key={item.show.id} />;
      })}
    </div>
  );
}

export default Landing;
