import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar/Index'
import News from './components/News/News';
import Footer from './components/Navbar/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5}/>
        <Footer/>
      </div>
    )
  }
}

