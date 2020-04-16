import React, {useCallback, useEffect} from 'react'
import {connect} from 'react-redux'
import 'aos/dist/aos.css'
import Aos from "aos"

const mapStateToProps = state => ({
  divY: state.landingPage.divY
})

const BlockInfo = React.forwardRef((props, ref) => {
  if(props.forwardRef) console.log(props, ref)
  
  useEffect(() => {
    Aos.init({duration: 1500})
  })

  return (
        <div className='block-info ' ref={props.forwardRef}>
            <div className='theme-bar'></div>
            <section>
              <h4 data-aos='fade-left' className='small-padding-top-bottom'>Isael Lizama</h4>
              <h2 data-aos='fade-right'className='small-padding-top-bottom'>Full Stack Developer</h2>
              <p data-aos='fade-down' className='small-padding-top-bottom'>Anim fugiat dolor amet non ex aliquip. Enim excepteur cupidatat id cillum culpa commodo amet. Duis commodo cupidatat deserunt voluptate aliquip reprehenderit tempor esse ullamco reprehenderit ex. Occaecat qui laboris pariatur dolore laboris amet culpa aliqua adipisicing. Eu ex elit dolor reprehenderit nisi.</p>
              <button className='block-info-button'>View Project</button>
            </section>
            <h1 className='big-quote'>
               Mollit consequat esse ea cillum.
            </h1>
        </div>
        )
})

export default connect(mapStateToProps)(BlockInfo)