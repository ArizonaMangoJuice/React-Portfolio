import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import 'aos/dist/aos.css'
import Aos from "aos"

const mapStateToProps = state => ({
  divY: state.landingPage.divY
})

const BlockInfo = React.forwardRef((props, ref) => {
  let image;

  useEffect(() => {
    Aos.init({duration: 1500})
  })


  if(props.img && props.me) image = (
    <div data-aos='fade-down' className='block-image-container'>
      <div className=''>
        <img alt='block project' className='me' src={props.imgSrc} />
      </div>
    </div>)

  if(props.img && !props.me) image = (
    <div data-aos='fade-down' className='block-image-container'>
      <img alt='main topic' className='topic' src={props.imgSrc} />
    </div>
  )

  return (
        <div tabIndex='0' className='block-info ' ref={props.forwardRef}>
            <div className='theme-bar'></div>
            <section>
              <h2 data-aos='flip-up' className='small-padding-top-bottom ruber'>{props.title}</h2>
              <p data-aos='fade-right'className='small-padding-top-bottom'>{props.desc}</p>
              <p data-aos='fade-down' className='small-padding-top-bottom'>{props.paragraph}</p>
              <a href={props.link ? props.link : '#'} data-aos='zoom-out-down' className='block-info-button'>View {props.title ? props.title : 'View Project'}</a>
            </section>
            {image ? image : <h1 data-aos='fade-down' className='big-quote'>
               Just Do It
            </h1>}
        </div>
        )
})

export default connect(mapStateToProps)(BlockInfo)