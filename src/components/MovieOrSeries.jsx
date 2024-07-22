import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieOrSeries = () => {
  const location = useLocation();
  const isBaseUrl = location.pathname === '/';
  const isMoviesUrl = location.pathname === '/movies';
  const isSeriesUrl = location.pathname === '/series';

  return (
    <div className='flex w-full'>
      <Link to='/' className={`w-1/3 p-2 text-center ${isBaseUrl ? 'text-black bg-cyan-500 border-t-2 border-r-2 border-cyan-500' : 'border-b-2 border-cyan-500'}`}>
      <i className="bi bi-house-fill"></i>
      </Link>
      <Link to='/movies' className={`w-1/3 p-2 text-center ${isMoviesUrl ? 'text-black bg-cyan-500 border-t-2 border-r-2 border-cyan-500' : 'border-b-2 border-cyan-500'}`}>
        MOVIES
      </Link>
      <Link to='/series' className={`w-1/3 p-2 text-center ${isSeriesUrl ? 'text-black bg-cyan-500 border-t-2 border-l-2 border-cyan-500' : 'border-b-2 border-cyan-500'}`}>
        WEB SERIES
      </Link>
    </div>
  );
};

export default MovieOrSeries;



