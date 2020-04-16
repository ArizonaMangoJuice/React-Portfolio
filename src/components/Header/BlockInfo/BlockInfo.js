import React, {useCallback, useEffect} from 'react'

export default function BlockInfo(props){
    
    const ref = node => {
      if(node !== null) console.log(node.getBoundingClientRect())
    }
    
    useEffect(() => {
      console.log(document)
    },[])

    return (
    <div className='block-info' >
        <div className='theme-bar'></div>
        <section>
          <h4 className='small-padding-top-bottom'>Isael Lizama</h4>
          <h2 className='small-padding-top-bottom'>Full Stack Developer</h2>
          <p className='small-padding-top-bottom'>Anim fugiat dolor amet non ex aliquip. Enim excepteur cupidatat id cillum culpa commodo amet. Duis commodo cupidatat deserunt voluptate aliquip reprehenderit tempor esse ullamco reprehenderit ex. Occaecat qui laboris pariatur dolore laboris amet culpa aliqua adipisicing. Eu ex elit dolor reprehenderit nisi.</p>
          <button className='block-info-button'>View Project</button>
        </section>
        <h1 className='big-quote'>
           Mollit consequat esse ea cillum.
        </h1>
    </div>
    )
}