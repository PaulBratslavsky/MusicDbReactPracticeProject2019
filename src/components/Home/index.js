import React, { Component } from 'react';
import Banner from '../Banner';
import ArtistsList from '../ArtistsList';

// COMPONENT

const REQ_URL = 'http://localhost:3000/artists';

class Home  extends Component {
  
  state = {
    artists: ''
  }

  componentDidMount() {
    
    fetch(REQ_URL, {
      method: 'GET'
    })
    .then( response => response.json() )
    .then( json => {
      this.setState({
        artists: json
      });
    } )

  }


  render() {
    return (
      <div>
        <Banner />
        <ArtistsList allArtists={this.state.artists}/>
      </div>
    )
  }
}

export default Home;
