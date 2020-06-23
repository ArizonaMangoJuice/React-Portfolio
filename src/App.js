import React, { useEffect  } from 'react';
import './App.css';
import Header from './components/Header/Header';
import BlockInfo from './components/BlockInfo/BlockInfo';
import {connect} from 'react-redux'
import 'aos/dist/aos.css'
import Aos from "aos"
import {staticData} from './Static'
import Footer from './components/Footer/Footer';
import BlogPreview from './components/BlogPreview/BlogPreview';

const mapStateToProps = state => ({
  divY: state.landingPage.divY
})

function App(props) {
  let animations = ['fade-in', 'fade-up', 'fade-right', 'fade-down']

  let background = ['lime-green', 'very-soft-orange', 'soft-orange','moderate-pink']

  // console.log(staticData)

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll)
    Aos.init({duration: 600})
    return () => {
      // window.removeEventListener('scroll', handleScroll)
    }
  })

  let blockInfo = staticData.map((e,i) => (
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
      <Header />
      <div className='big-container'>
        <h1 data-aos='fade-left'>Looking For a Full Stack Developer?</h1>
        <div data-aos='fade-right' className='p-container'>
          <p>
            I Am a Full Stack Developer Living In Colorado, USA
          </p>
          <p>I Make Web Applications with React, Python, and React Native</p>
        </div>
        <div className='social-media'>
          <a data-aos='fade-down' href='https://github.com/ArizonaMangoJuice?tab=repositories'><i className="fab fa-github"></i></a>
          <a data-aos='fade-down' href='https://www.linkedin.com/in/isael-lizama-9a128b130/'><i className="fab fa-linkedin-in"></i></a>
          <a data-aos='fade-down' href='https://isaelblogs.netlify.app/'><i className="fas fa-blog"></i></a>
        </div>
        
      </div>
      <BlogPreview />
      {blockInfo}
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(App);
