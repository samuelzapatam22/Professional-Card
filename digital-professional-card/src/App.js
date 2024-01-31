import React, { Component } from 'react';
import './App.css';
import Avatar from './components/avatar/Avatar.js';
import Myinfo from './components/my-info/Myinfo.js';
import Aboutme from './components/aboutMe/Aboutme.js'
import Footer from './components/footer/Footer.js';
import Contact from './components/contact/Contact.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Avatar/>
        <Myinfo/>
        <Contact/>
       <Aboutme/>
       <Footer/>
      </div>
    );
  }
}

export default App;
