import React from 'react';
import './albumlist.css';

const AlbumList= (props) => {

  const ShowList = ({albums}) => {

    if (albums) { return albums.map( album => <img src={`/images/albums/${album.cover}.jpg`} className="albums-list-image" key={album.albumId}/> ); }
    
  }

  return (
    <div className="albums-list">
      { ShowList(props) }
    </div>
  )
}

export default AlbumList;
