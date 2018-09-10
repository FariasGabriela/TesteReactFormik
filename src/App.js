import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';

import TesteFormik from './TesteFormik';

const imaginaryUser = {
  email: '',
  username: '',
  imaginaryThingId: null,
};


class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Teste</h1>
      </div>  
    );
  }
}

export default App;

