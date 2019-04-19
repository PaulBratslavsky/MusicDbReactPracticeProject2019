import React from 'react';
import { Link } from 'react-router-dom';

// CSS 
import './artistheader.css';

const AritstHeader = () => {
  return(
    <header className="artist-header">
      <Link className="artist-header-link" to="/">Back To Music DB</Link>
    </header>
  );
}

export default AritstHeader