import React, { useState, useEffect } from 'react'
import './BlogPreview.css'
import {staticData} from '../../Static'
import 'aos/dist/aos.css'
import Aos from "aos"
import {useInterval} from '../UseInterval/UseInterval'
import BlogCard from '../BlogCard/BlogCard'

let REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

console.log(REACT_APP_SERVER_URL)

export default function BlogPreview(props){
    let data = [...staticData]
    let [count, setCount] = useState(0)
    let [newLoad, setNewLoad] = useState(true)
    let [result, setResult] = useState(false)

    if(count === 3) setCount(0)

    useInterval(() => {
            setCount(count + 1)
    }, 5000)

    useEffect(() => {
        Aos.init({duration: 600})
        if(result === false) {
            fetch(`${REACT_APP_SERVER_URL}/api/page/blogpreview`)
            .then(res => res.json())
            .then(result => {
                console.log('setting the result')
                setResult(result)
            }, error => {
                console.log('this is the error',error)
            })
        }
        return () => {
        };
      }, [result]);

    // console.log('result', result)
    return (
        <div className='moderate-pink'>
            <div data-aos='fade-down' className='blog-container moderate-pink'>
                    <h1 data-aos='fade-right' className='blog-title'>Read My Latest Posts!</h1>
                <BlogCard 
                    result={result ? result : undefined}
                    // data={data}
                    count={count}
                    left={true}
                />
                <BlogCard 
                    result={result ? result : undefined}
                    // data={data}
                    count={count}
                    main={true}
                />
                <BlogCard 
                    result={result ? result : undefined}
                    // data={data}
                    count={count}
                />
            </div>
        </div>
    )
}