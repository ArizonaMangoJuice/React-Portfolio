import React, { useState, useEffect } from 'react'
import './BlogPreview.css'
// import {staticData} from '../../Static'
import 'aos/dist/aos.css'
import BlogCard from '../BlogCard/BlogCard'

let REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

console.log(REACT_APP_SERVER_URL)
export default function Clock(){
    const [currentCount, setCount] = useState(0)
    const [fetchResult, setFetchResult] = useState('')
    const [switched, setswitched] = useState(false)

    useEffect(() => {
        if(fetchResult === ''){
            fetch(`${REACT_APP_SERVER_URL}/api/page/blogpreview`)
                .then(res => res.json())
                .then(result => {
                    setFetchResult(result)
                })
        }
    }, [fetchResult])

    useEffect(() => {
        if(currentCount === 2) setCount(0)
        
        const id = setInterval(() => {
            setswitched(true)
            setCount(currentCount => currentCount + 1)
            return setTimeout(() => setswitched(false), 1000)
        }, 5000)

        return () => {
            clearInterval(id)
        }
    }, [currentCount])

    

    return (

        <div className='moderate-pink'>
            <h1 data-aos='fade-right' className='blog-title'>Read My Latest Posts!</h1>
             <div  className='blog-container moderate-pink'>
                     
                <BlogCard 
                    result={fetchResult}
                    // data={data}
                    count={currentCount}
                    left={true}
                    test={'fade-in'}
                    loading={switched}
                />
                <BlogCard 
                    result={fetchResult}
                    // data={data}
                    count={currentCount}
                    loading={switched}
                    main={true}
                />
                <BlogCard 
                    loading={switched}
                    result={fetchResult}
                    // data={data}
                    count={currentCount}
                />
            </div>
        </div>
    )
}
















// export default function BlogPreview(props){
//     // let data = [...staticData]
//     let [count, setCount] = useState(0)
//     let [newLoad, setNewLoad] = useState('')
//     let [result, setResult] = useState(false)

//     if(count === 3) setCount(0)

//     useInterval(() => {
//             setCount(count + 1)
//     }, 5000)

//     useEffect(() => {
//         Aos.init({duration: 600})

//         if(!result) {
//             fetch(`${REACT_APP_SERVER_URL}/api/page/blogpreview`)
//             .then(res => res.json())
//             .then(result => setResult(prevResult => result))
//         }
        
//         return () => {
//         };
//       }, [result]);

//     // console.log('result', result)
//     return (
//         <div className='moderate-pink'>
//             <div data-aos='fade-down' className='blog-container moderate-pink'>
//                     <h1 data-aos='fade-right' className='blog-title'>Read My Latest Posts!</h1>
//                 <BlogCard 
//                     result={result}
//                     // data={data}
//                     count={count}
//                     left={true}
//                 />
//                 <BlogCard 
//                     result={result}
//                     // data={data}
//                     count={count}
//                     main={true}
//                 />
//                 <BlogCard 
//                     result={result}
//                     // data={data}
//                     count={count}
//                 />
//             </div>
//         </div>
//     )
// }

