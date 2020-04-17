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
      <div className='big-container'>
        <h1 data-aos='fade-left'>Looking For a Full Stack Developer?</h1>
        <div data-aos='fade-right' className='p-container'>
          <p>
            I Am a Full Stack Developer Living In Colorado, USA
          </p>
          <p>I Make Web Applications with React, Python, and Svelter</p>
        </div>
        <div className='social-media'>
          <a data-aos='fade-down' href=''><i className="fab fa-github"></i></a>
          <a data-aos='fade-down' href=''><i className="fab fa-linkedin-in"></i></a>
          <a data-aos='fade-down' href=''><i className="fas fa-blog"></i></a>
        </div>
        
      </div>
      <div data-aos='fade-in' className='block-container  first-margin'>
        <BlockInfo img={true} me={true} src={'https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Fme.jpg?alt=media'}
          title='Isaels Blog'
          desc='Full Stack Developer'
          paragraph=''
        />
      </div>
      <div data-aos='fade-up' className='block-container lime-green' >
        <BlockInfo 
          title='Lol Improver'
          desc='Improve your gaming skills'
          paragraph='Lol Improver is an app that lets you take notes on champions. Allowing you to see which champions you struggle against. Lol Improver lets you find player statistics. This app user React, MongoDB, Express, and mocha, chai, enzyme and, jest. You can find the repo here.'
          />
      </div>
      <div data-aos='fade-right'  className='block-container very-soft-orange'>
        <BlockInfo 
          title=''
          desc=''
          paragraph=''
        />
      </div>
      <div data-aos='fade-down' className='block-container soft-orange'>
        <BlockInfo 
          title=''
          desc=''
          paragraph=''
        />
      </div>
      <div data-aos='fade-right'  className='block-container moderate-pink'>
       <BlockInfo 
          title=''
          desc=''
          paragraph=''
        />
      </div> 
    </div>
  );
}

export default connect(mapStateToProps)(App);
