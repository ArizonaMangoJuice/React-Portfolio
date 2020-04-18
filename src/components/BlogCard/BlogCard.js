import React from 'react'
let REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

export default function BlogCard(props){
    if(!props.result) return (<div>LOADING</div>)
    let url 


    if(props.left){

        url = props.count === 0 ? props.result[props.result.length - 1].linkName : props.result[props.count - 1].linkName 

        url = encodeURI(`https://isaelblogs.netlify.app/blogPages/${url}`)
        
        return (
            <a 
                href={url} 
                className='blog relative' 
                style={props.count === 0 ? {backgroundImage: `url(${props.result[props.result.length - 1].pictures[0][0].link})`, backgroundPosition:'center'} : {backgroundImage: `url(${props.result[props.count - 1].pictures[0][0].link})`, backgroundPosition:'center'}}
            > 
                <div className='text dark-blue-background'>
                    <h1>{props.count === 0 ? props.result[props.result.length-1].title : props.result[props.count - 1].title}</h1>
                    {/* <h3>{props.count === 0 ? props.result[props.result.length-1].desc : props.result[props.count  -1].desc}</h3> */}
                </div>
            </a>
        )
    }

    if(props.main){

        url = props.result[props.count].linkName

        url = encodeURI(`https://isaelblogs.netlify.app/blogPages/${url}`)

        return(
            <a  
                href={url} 
                className={`blog relative`}
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

    url = !props.result[props.count + 1] ? props.result[props.result.length - 1].linkName : props.result[props.count + 1].linkName

    url = encodeURI(`https://isaelblogs.netlify.app/blogPages/${url}`)

    return (
        
        <a  
            href={url}
            className={`blog relative`}
            style={!props.result[props.count + 1] ? {backgroundImage: `url(${props.result[props.result.length - 1].pictures[0][0].link})`, backgroundPosition:'center'} : {backgroundImage: `url(${props.result[props.count + 1].pictures[0][0].link})`, backgroundPosition:'center'}}
        >
            <div className='text dark-blue-background'>
                <h1>{!props.result[props.count + 1] ? props.result[props.result.length-1].title : props.result[props.count + 1].title}</h1>
                {/* <h3>{!props.result[props.count + 1] ? props.result[props.result.length-1].desc : props.result[props.count  + 1].desc}</h3> */}
            </div>        
        </a>
    )
}