import React, { useState, useEffect,  } from 'react';
import './App.css';
import Header from './components/Header/Header';
import BlockInfo from './components/Header/BlockInfo/BlockInfo';
import {connect} from 'react-redux'
import 'aos/dist/aos.css'
import Aos from "aos"


const mapStateToProps = state => ({
  divY: state.landingPage.divY
})

function App(props) {
  

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll)
    Aos.init({duration: 600})
    return () => {
      // window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className="App">
      <Header />
      <div data-aos='fade-in' className='block-container  first-margin'>
        <BlockInfo img={true} me={true} src={'https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Fme.jpg?alt=media'}/>
      </div>
      <div data-aos='fade-up' className='block-container lime-green'>
        <BlockInfo />
      </div>
      <div data-aos='fade-right'  className='block-container very-soft-orange'>
        <BlockInfo />
      </div>
      <div data-aos='fade-left' className='block-container soft-orange'>
        <BlockInfo />
      </div>
      <div data-aos='fade-down'  className='block-container moderate-pink'>
        <BlockInfo />
      </div> 
    </div>
  );
}

export default connect(mapStateToProps)(App);
