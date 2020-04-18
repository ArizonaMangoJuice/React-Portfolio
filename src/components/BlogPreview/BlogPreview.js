import React, { useState, useEffect } from 'react'
import './BlogPreview.css'
import {staticData} from '../../Static'
import 'aos/dist/aos.css'
import Aos from "aos"

export default function BlogPreview(props){
    let data = [...staticData]
    let [count, setCount] = useState(0)
    let [newLoad, setNewLoad] = useState(true)

    useEffect(() => {
        Aos.init({duration: 600})

        const interval = setInterval(() => {
          setCount(count => count + 1);
          setNewLoad(true)
        }, 5000);   

        const makeNew = setInterval( () => {
            setNewLoad(false)
        }, 4999)

        if(count === 3) setCount(0)

        return () => {
            clearInterval(interval)
            clearInterval(makeNew)
        };
      }, [count]);


    return (
        <div className='moderate-pink'>
            <div data-aos='fade-down' className='blog-container moderate-pink'>
                    <h1 data-aos='fade-right' className='blog-title'>Read My Latest Posts!</h1>
                    <div  
                        className={`blog relative ${newLoad ? 'blog-fade' : ''}`}
                        style={count === 0 ? {backgroundImage: `url(${data[data.length-1].imgSrc})`, backgroundPosition:'center'} : {backgroundImage: `url(${data[count - 1].imgSrc})`, backgroundPosition:'center'}}
                    >
                        <div className='text dark-blue-background'>
                            <h1>{count === 0 ? data[data.length-1].title : data[count - 1].title}</h1>
                            <h3>{count === 0 ? data[data.length-1].desc : data[count  -1].desc}</h3>
                        </div>
                    </div>
                    <div 
                        className={`blog relative blog-main ${newLoad ? 'blog-fade' : ''}`} 
                        style={{backgroundImage: `url(${data[count].imgSrc})`, backgroundPosition:'center'}}
                    >
                        <div className='text dark-blue-background'>
                            <h1>{data[count].title}</h1>
                            <h3>{data[count].desc}</h3>
                            <div className='loading-bar'></div>
                        </div>
                    </div>
                <div  
                        className={`blog relative ${newLoad ? 'blog-fade' : ''}`}
                        style={!data[count + 1] ? {backgroundImage: `url(${data[data.length-1].imgSrc})`, backgroundPosition:'center'} : {backgroundImage: `url(${data[count + 1].imgSrc})`, backgroundPosition:'center'}}
                    >
                        <div className='text dark-blue-background'>
                            <h1>{!data[count + 1] ? data[data.length-1].title : data[count + 1].title}</h1>
                            <h3>{!data[count + 1] ? data[data.length-1].desc : data[count  + 1].desc}</h3>
                        </div>        
                    </div>
            </div>
        </div>
    )
}