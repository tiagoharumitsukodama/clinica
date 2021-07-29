import React from 'react';
import './App.css';
import Footer from './Componets/Footer';

import Headers from './Componets/Header';
import ScreenAbout from './Componets/ScreenAbout';
import ScreenFAQ from './Componets/ScreenFAQ';
import ScreenSearch from './Componets/ScreenSearch';
import ScreenServices from './Componets/ScreenServices';

class App extends React.Component{
  render(){
    return (
      <div className='App'>
        <Headers />
        <ScreenSearch />
        <ScreenAbout />
        <ScreenServices />
        <ScreenFAQ />
        <Footer />
      </div>
    );
  }
}

export default App;
