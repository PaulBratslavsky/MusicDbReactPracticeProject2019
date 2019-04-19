import React, { Component } from 'react'

// CSS
import './artist.css';

// COMPONENTS
import AritstHeader from '../ArtistHeader';
import AlbumList from '../AlbumList';

const REQ_URL = 'http://localhost:3000/artists';

class Artist extends Component {

  state = {
    artist: ''
  }

  componentDidMount() {
    
    const artistId = this.props.match.params.artistid;

    fetch(`${REQ_URL}/${artistId}`, {
      method: 'GET'
    })
    .then( response => response.json() )
    .then( json => {
      this.setState({
        artist: json
      });
    } )

  
  }


  render() {
    
    return (
      <div>
        <AritstHeader />

        <span className="artist-header-border"></span>
          <div className="avatar">
            <div className="avatar-image" style={{backgroundImage: `url(../../images/covers/${this.state.artist.cover}.jpg)`}}></div>
          </div>
        <span className="artist-header-border"></span>

          <div className="artist-bio">
            <h3 className="artist-bio-name">{this.state.artist.name}</h3>
            <p className="artist-bio-text">{this.state.artist.bio}</p>
          </div>

          <AlbumList albums={this.state.artist.albums} />


        </div>
    )
  }
  
}

export default Artist;
