import React, { Component } from 'react'
import AritstHeader from '../ArtistHeader';

// CSS
import './artist.css';
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

    console.log(this.state.artist, 'Single artist state');

    return (
      <div>
        <AritstHeader />
        <div className="artist-bio">
          <div className="avatar">
            <div className="avatar-image" style={{backgroundImage: `url(../../images/covers/${this.state.artist.cover}.jpg)`}}></div>
          </div>
          <div className="artist-bio">
            <h3>{this.state.artist.name}</h3>
            <p>{this.state.artist.bio}</p>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Artist;
