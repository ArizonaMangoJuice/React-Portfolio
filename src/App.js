import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import BlockInfo from './components/Header/BlockInfo/BlockInfo';
import { CSSTransition } from 'react-transition-group'

function App() {
  let [height, setHeight] = useState(0)
  let [passed, setPassed] = useState(false)

  let handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    console.log(currentScrollPos, height)

    if(height <= currentScrollPos){
      setPassed(true)
    } 
    // else {
    //   setPassed(false)
    // }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const measuredRef = useCallback(node => {
    if(node !== null) setHeight(node.getBoundingClientRect().y)
  }, [])

  return (
    <div className="App">
      <Header />
      <div className='block-container dark-blue-background first-margin'>
        <BlockInfo />
      </div>
      <div className='block-container lime-green'>
        <BlockInfo />
      </div>
      <div ref={measuredRef}  className='block-container very-soft-orange'>
      <CSSTransition
        in={passed}
        appear={passed}
        timeout={1000}
        classNames='alert'
      >
        { passed ? <BlockInfo /> : <div className='blue-card'></div> }

      </CSSTransition>
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
