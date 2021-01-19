import React from 'react'
import { Transition } from 'react-transition-group'
import './style.css'

// let REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
let url 
const duration = 3000

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
}

const transitionStyle = {
    entering: { opacity: 1},
    entered: { opacity: 1},
    exiting: { opacity: 0},
    exited: { opacity: 0},
}

// this is really hard to read refactor or just remove it

export default function BlogCard(props){

    if(!props.result || props.result.length === 0) return <div className='blog loading'><div className="lds-ripple"><div></div><div></div></div></div>
    
    // console.log('result', props.result)

    if(props.left){

        url = props.count === 0 ? props.result[props.result.length - 1].linkName : props.result[props.count - 1].linkName 

        url = encodeURI(`https://isaelblogs.netlify.app/blogPages/${url}`)
        
        return (
            <Transition in={true} timeout={duration}  >
                {state => (<a 
                    href={url} 
                    className={`blog relative ${props.loading ? 'blog-fade' : ''}`}
                    style={props.count === 0 
                        ? {backgroundImage: `url(${props.result[props.result.length - 1].pictures[0][0].link})`, backgroundPosition:'center', ...defaultStyle, ...transitionStyle[state]} 
                        : {backgroundImage: `url(${props.result[props.count - 1].pictures[0][0].link})`, backgroundPosition:'center', ...defaultStyle, ...transitionStyle[state]}}
                > 
                    <div className='text dark-blue-background'>
                        <h1>{props.count === 0 ? props.result[props.result.length-1].title : props.result[props.count - 1].title}</h1>
                        {/* <h3>{props.count === 0 ? props.result[props.result.length-1].desc : props.result[props.count  -1].desc}</h3> */}
                    </div>
                </a>)}
            </Transition>
        )
    }

    if(props.main){
        url = props.result[props.count].linkName

        url = encodeURI(`https://isaelblogs.netlify.app/blogPages/${url}`)

        return(
            <a  
                href={url} 
                className={`blog relative ${props.loading ? 'blog-fade' : ''}`}
                style={{backgroundImage: `url(${props.result[props.count].pictures[0][0].link})`, backgroundPosition:'center'}}
            >
                <div className='text dark-blue-background'>
                    <h1>{props.result[props.count].title}</h1>
                    {/* <h3>{props.result[props.count].desc}</h3> */}
                    <div className='loading-bar'></div>
                </div>        
            </a>
        )
    }

    if(props.result ){
        url = !props.result[props.count + 1] ? props.result[props.result.length - 1].linkName : props.result[props.count + 1].linkName

        url = encodeURI(`https://isaelblogs.netlify.app/blogPages/${url}`)
    }

    return (
        <a  
            href={url}
            className={`blog relative ${props.loading ? 'blog-fade' : ''}`}
            style={!props.result[props.count + 1] ? {backgroundImage: `url(${props.result[props.result.length - 1].pictures[0][0].link})`, backgroundPosition:'center'} : {backgroundImage: `url(${props.result[props.count + 1].pictures[0][0].link})`, backgroundPosition:'center'}}
        >
            <div className='text dark-blue-background'>
                <h1>{!props.result[props.count + 1] ? props.result[props.result.length-1].title : props.result[props.count + 1].title}</h1>
                {/* <h3>{!props.result[props.count + 1] ? props.result[props.result.length-1].desc : props.result[props.count  + 1].desc}</h3> */}
            </div>        
        </a>
    )
}