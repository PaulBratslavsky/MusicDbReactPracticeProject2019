import React from 'react';
import { Link } from 'react-router-dom';

const AritstHeader = () => {
  return(
    <header className="artist-header">
      <Link to="/">Back To Music DB</Link>
    </header>
  );
}

export default AritstHeader