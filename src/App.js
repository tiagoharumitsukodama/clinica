import React from 'react';
import './App.css';
import Footer from './Componets/Footer';

import Headers from './Componets/Header';
import ScreenFAQ from './Componets/ScreenFAQ';
import ScreenSearch from './Componets/ScreenSearch';
import ScreenServices from './Componets/ScreenServices';

class App extends React.Component{
  render(){
    return (
      <div className='App'>
        <Headers />
        <ScreenSearch />
        <ScreenFAQ />
        <ScreenServices />
        <Footer />
      </div>
    );
  }
}

export default App;
