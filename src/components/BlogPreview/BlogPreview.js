import React, { useState, useEffect } from 'react'
import './BlogPreview.css'
import {staticData} from '../../Static'
import 'aos/dist/aos.css'
import Aos from "aos"

export default function BlogPreview(props){
    let data = [...staticData]
    let [count, setCount] = useState(0)
    // let [array, setArray] = useState(data)
    let [newLoad, setNewLoad] = useState(true)

    useEffect(() => {
        Aos.init({duration: 600})

        const interval = setInterval(() => {
          setCount(count => count + 1);
          setNewLoad(newLoad => true)
        }, 5000);   

        const makeNew = setInterval( () => {
            setNewLoad(newLoad => false)
        }, 4500)

        if(count === 3) setCount(0)

        return () => {
            clearInterval(interval)
            clearInterval(makeNew)
            // setNewLoad(newLoad => false)
        };
      }, [count]);


    return (
        <div className='blog-container'>
            <div>
                <div className='blog-main'>
                    <h1>{count === 0 ? data[data.length-1].title : data[count - 1].title}</h1>
                    <h3>{count === 0 ? data[data.length-1].desc : data[count  -1].desc}</h3>
                </div>
                <div className={`blog-main ${newLoad ? 'blog-fade' : ''}`}>
                    <h1>{data[count].title}</h1>
                    <h3>{data[count].desc}</h3>
                    <div className='loading-bar'></div>
                </div>
               <div className='blog-main'>
                    <h1>{!data[count + 1] ? data[data.length-1].title : data[count + 1].title}</h1>
                    <h3>{!data[count + 1] ? data[data.length-1].desc : data[count  + 1].desc}</h3>
                </div>
            </div>
        </div>
    )
}