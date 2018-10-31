import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import Gallery from 'react-grid-gallery';

import HomePage from './pages/HomePage.js';
import PhotoPage from './pages/PhotoPage.js';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/v1/photos" component={HomePage} />
            <Route exact path="/v1/photos/:photoID" component={PhotoPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


