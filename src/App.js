import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import BlockInfo from './components/Header/BlockInfo/BlockInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='block-container dark-blue-background first-margin'>
        <BlockInfo />
      </div>
      <div className='block-container lime-green'>
        <BlockInfo />
      </div>
      <div className='block-container very-soft-orange'>
        <BlockInfo />
      </div>
      <div className='block-container soft-orange'>
        <BlockInfo />
      </div>
      <div className='block-container moderate-pink'>
        <BlockInfo />
      </div>


    </div>
  );
}

export default App;
