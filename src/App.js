import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import BlockInfo from './components/BlockInfo/BlockInfo';
import { connect } from 'react-redux'
import 'aos/dist/aos.css'
import Aos from "aos"
import { staticData } from './Static'
import Footer from './components/Footer/Footer';
import BlogPreview from './components/BlogPreview/BlogPreview';
import SmallProjects from './components/SmallProjects';

const mapStateToProps = state => ({
  divY: state.landingPage.divY
})

function App(props) {
  let animations = ['fade-in', 'fade-up', 'fade-right', 'fade-down']

  let background = ['lime-green', 'very-soft-orange', 'soft-orange', 'moderate-pink', 'lime-green']

  // console.log(staticData)

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll)
    Aos.init({ duration: 600 })
    return () => {
      // window.removeEventListener('scroll', handleScroll)
    }
  })

  let blockInfo = staticData.map((e, i) => (
    <div className={`${background[i]}`}>
      <div data-aos={animations[i]} className={`block-container ${background[i]}`}>
        <BlockInfo
          img={e.img}
          me={e.me}
          imgSrc={e.imgSrc}
          title={e.title}
          desc={e.desc}
          paragraph={e.paragraph}
          buttonTitle={e && e.buttonTitle}
          link={e.link}
        />
      </div>
    </div>
  ))

  // console.log(blockInfo)



  return (
    <div className="App">
      <div className='circle'></div>
      <Header />
      <div className='big-container '>
        <div className='jumbotron-container'>
          <h1 data-aos='fade-left'>Looking For a Full Stack <br/> Developer?</h1>
          <div data-aos='fade-right' className='p-container'>
            <p>
              I Am a Full Stack Developer Living In <span>Denver Colorado</span>, USA
          </p>
            <p>I Make Web Applications with <span>React</span> and <span>React Native</span></p>
          </div>
          <div className='social-media'>
            <a data-aos='fade-down' href='https://github.com/ArizonaMangoJuice?tab=repositories'><i className="jumbo-icons fab fa-github"></i></a>
            <a data-aos='fade-down' href='https://www.linkedin.com/in/isael-lizama-9a128b130/'><i className="jumbo-icons fab fa-linkedin-in"></i></a>
            <a data-aos='fade-down' href='https://isaelblogs.netlify.app/'><i className="jumbo-icons fas fa-blog"></i></a>
          </div>
        </div>

        {/* <div className='about-me'>
          <div className='about-card-skill'>
            <div className="hexagon"><span><i className="big fas fa-shield-virus"></i></span></div>
            <p className='card-skill-title'>Reliable</p>
            <p className='card-skill-desc'>I try to make applications that are reliable and robust.</p>
          </div>
          <div className='about-card-skill'>
            <div className="hexagon"><span><i className="fas fa-laptop-code"></i></span></div>
            <p className='card-skill-title'>Reliable</p>
            <p className='card-skill-desc'>I try to make applications that are reliable and robust.</p>
          </div>
          <div className='about-card-skill'>
            <div className="hexagon"><span><i class="fas fa-bolt"></i></span></div>
            <p className='card-skill-title'>Dynamic</p>
            <p className='card-skill-desc'>I love making old sites feel modern.</p>
          </div>
        </div> */}
        <BlogPreview />
        <SmallProjects />
        {blockInfo}
      </div>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(App);
