import React, {useCallback, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import 'aos/dist/aos.css'
import Aos from "aos"

const mapStateToProps = state => ({
  divY: state.landingPage.divY
})

const BlockInfo = React.forwardRef((props, ref) => {
  // if(props.forwardRef) console.log(props, ref)
  let image;

  useEffect(() => {
    Aos.init({duration: 1500})
  })


  if(props.img && props.me) image = (
    <div data-aos='fade-down' className='me'>
      <img className='' src={props.imgSrc} />
    </div>)

  if(props.img && !props.me) image = (
    <div data-aos='fade-down' className='block-image-container'>
      <img src={props.imgSrc} />
    </div>
  )


  return (
        <div className='block-info ' ref={props.forwardRef}>
            <div className='theme-bar'></div>
            <section>
              <h4 data-aos='flip-up' className='small-padding-top-bottom'>{props.title}</h4>
              <h2 data-aos='fade-right'className='small-padding-top-bottom'>{props.desc}</h2>
              <p data-aos='fade-down' className='small-padding-top-bottom'>{props.paragraph}</p>
              <a href={props.link ? props.link : '#'} data-aos='zoom-out-down' className='block-info-button'>{props.buttonTitle ? props.buttonTitle : 'View Project'}</a>
            </section>
            {image ? image : <h1 data-aos='fade-down' className='big-quote'>
               Just Do It
            </h1>}
        </div>
        )
})

export default connect(mapStateToProps)(BlockInfo)