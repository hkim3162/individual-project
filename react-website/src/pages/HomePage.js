import React, { Component } from 'react';
import PhotoAPI from '../api/PhotoAPI';

class HomePage extends Component {
  state = {
    photos: []
  }


componentDidMount(){
  PhotoAPI.fetchPhotos()
    .then((apiResponseJSON) => {
      this.setState({
        photos: apiResponseJSON
      })
    }
  )
}

displayTest = () => {
  if (this.state.photos.length > 0) {
    return this.state.photos[2].url;
  }
}

  
  render() {



    return (
      <div>
        <h1> Headshots with Han </h1>
        <h2> {console.log(this.state.photos)}  </h2>
        <img src={this.displayTest()} />
      </div>
    );
  }
}

export default HomePage;