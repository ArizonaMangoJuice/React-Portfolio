import React, { useState, useEffect,  } from 'react';
import './App.css';
import Header from './components/Header/Header';
import BlockInfo from './components/BlockInfo/BlockInfo';
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
      <div data-aos='fade-in' className='block-container '>
        <BlockInfo img={true} me={true} imgSrc={'https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Fme.jpg?alt=media'}
          title='Isaels Lizama'
          desc='Full Stack Developer'
          paragraph={`Being a web developer taught me how to think critically about what im going to do and how i'm going to do it.
          The idea of creating something from scratch that didn't exist before is amazing.
          One of the best things about being a web developer is, new technologies come out and make the developing more interesting.
          You'll never be bored.
          Also, the feeling that you can work as a team, create an app that will help multiple people is one of the best feelings I have ever felt. 
          When i'm not developing I also love doing anything that is competitive, building and fixing computers,
          and hanging out with friends.`}
          buttonTitle={'Visit Blog'}
          link={'https://isaelblogs.netlify.app/'}
        />
      </div>
      <div data-aos='fade-up' className='block-container lime-green' >
        <BlockInfo img={true} imgSrc={'https://arizonamangojuice.github.io/portfolio/img/lolImprover.png'}
          title='Lol Improver'
          desc='Improve your gaming skills'
          paragraph='Lol Improver is an app that lets you take notes on champions. Allowing you to see which champions you struggle against. Lol Improver lets you find player statistics. This app user React, MongoDB, Express, and mocha, chai, enzyme and, jest. You can find the repo here.'
          link={'https://focused-nightingale-b297e9.netlify.com/'}
          />
      </div>
      <div data-aos='fade-right'  className='block-container very-soft-orange'>
        <BlockInfo img={true} imgSrc={'https://arizonamangojuice.github.io/portfolio/img/bonus-kid-banner.png'}
          title='Bonus Kid'
          desc='Treat Your Children'
          paragraph={`Bonus Kid  is an app that lets parents give incentives to their kids. The parent can add tasks and rewards to each child they have. The child can send a response saying they have completed the task or buy a reward from the store the parent has made. This app uses React, MongoDB, Express, and mocha, chai, enzyme and, jest. You can find the repo here.`}
          link={'https://focused-nightingale-b297e9.netlify.com/'}
        />
      </div>
      <div data-aos='fade-down' className='block-container soft-orange'>
        <BlockInfo img={true} imgSrc={' https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Fisaelsblog.jpg?alt=media'}
          title='Isaels Blog'
          desc='Writing Helps Think'
          paragraph='Isaels blog is a blog web page that let me posts my thoughts and things that I have been working on. People are able to see my latest blogs. I can also login to create a blog and be able to upload images.'
          link={'https://isaelblogs.netlify.app/'}
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
