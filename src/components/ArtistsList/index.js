import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './artistslist.css';

const ArtistsList = (props) => {

  // LIST FUNCTION
  const List = ({allArtists}) => {

    if (allArtists) {
      return allArtists.map( ( item ) => {
       
        const linkStyle = {
          backgroundImage: `url(../../images/covers/${item.cover}.jpg)`
        }

        return(
          <Link 
            key={item.id} 
            to={`/artist/${item.id}`} 
            className="artist-item"
            style={linkStyle}
          >

            <div className="artist-name">{item.name}</div>
          </Link>
        );

      });
    }

  }

  return(
    <div className="artists-list">
      <h4>Browse The Artists</h4>
      { List(props) }
    </div>
  );

} 

export default ArtistsList;