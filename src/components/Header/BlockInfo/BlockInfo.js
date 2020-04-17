import React, {useCallback, useEffect} from 'react'
import {connect} from 'react-redux'
import 'aos/dist/aos.css'
import Aos from "aos"

const mapStateToProps = state => ({
  divY: state.landingPage.divY
})

const BlockInfo = React.forwardRef((props, ref) => {
  if(props.forwardRef) console.log(props, ref)
  
  let image;

  useEffect(() => {
    Aos.init({duration: 1500})
  })

  if(props.img && props.me) image = (
    <div data-aos='zoom-out-left' className='block-image-container'>
      <img src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Fme.jpg?alt=media' />
    </div>)

  if(props.img && !props.me) image = (
    <div data-aos='zoom-out-left' className='block-image-container'>
      <img src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Fme.jpg?alt=media' />
    </div>
  )


  return (
        <div className='block-info ' ref={props.forwardRef}>
            <div className='theme-bar'></div>
            <section>
              <h4 data-aos='fade-left' className='small-padding-top-bottom'>{props.title}</h4>
              <h2 data-aos='fade-right'className='small-padding-top-bottom'>{props.desc}</h2>
              <p data-aos='fade-down' className='small-padding-top-bottom'>{props.paragraph}</p>
              <button data-aos='zoom-out-down' className='block-info-button'>View Project</button>
            </section>
            {image ? image : <h1 data-aos='zoom-out-left' className='big-quote'>
               Just Do It
            </h1>}
        </div>
        )
})

export default connect(mapStateToProps)(BlockInfo)