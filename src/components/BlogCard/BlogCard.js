import React from 'react'

export default function BlogCard(props){
    console.log('blog card props', props)
    if(!props.result) return (<div>LOADING</div>)

    if(props.left){
        return (
            <div  
                className={`blog relative`}
                style={props.count === 0 ? {backgroundImage: `url(${props.data[props.data.length-1].imgSrc})`, backgroundPosition:'center'} : {backgroundImage: `url(${props.data[props.count - 1].imgSrc})`, backgroundPosition:'center'}}
            >
                <div className='text dark-blue-background'>
                    <h1>{props.count === 0 ? props.data[props.data.length-1].title : props.data[props.count - 1].title}</h1>
                    <h3>{props.count === 0 ? props.data[props.data.length-1].desc : props.data[props.count  -1].desc}</h3>
                </div>
            </div>
        )
    }

    if(props.main){
        return(
            <div  
                className={`blog relative`}
                style={{backgroundImage: `url(${props.data[props.count].imgSrc})`, backgroundPosition:'center'}}
            >
                <div className='text dark-blue-background'>
                    <h1>{props.data[props.count].title}</h1>
                    <h3>{props.data[props.count].desc}</h3>
                    <div className='loading-bar'></div>
                </div>        
            </div>
        )
    }

    return (
        <div  
            className={`blog relative`}
            style={!props.data[props.count + 1] ? {backgroundImage: `url(${props.data[props.data.length-1].imgSrc})`, backgroundPosition:'center'} : {backgroundImage: `url(${props.data[props.count + 1].imgSrc})`, backgroundPosition:'center'}}
        >
            <div className='text dark-blue-background'>
                <h1>{!props.data[props.count + 1] ? props.data[props.data.length-1].title : props.data[props.count + 1].title}</h1>
                <h3>{!props.data[props.count + 1] ? props.data[props.data.length-1].desc : props.data[props.count  + 1].desc}</h3>
            </div>        
        </div>
    )
}