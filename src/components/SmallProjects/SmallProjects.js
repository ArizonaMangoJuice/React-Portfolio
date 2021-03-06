import React from 'react';
import { staticSmallProjects } from '../../Static/smallProjects';

const SmallProjects = () => {
    const projects = staticSmallProjects.map(e => (
        <a  
            key={`${e.link}`}
            href={e.link}
            className={`blog relative`}
            style={{ backgroundImage: `url(${e.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}

        >
            <div className='text dark-blue-background'>
                <h1 className='projects-card-name'>{e.title}</h1>
                {/* <h3>{props.result[props.count].desc}</h3> */}
            </div>
        </a>
    ));

    return (
        <div className='moderate-pink'>
            <div className='blog-container moderate-pink'>
                <h1 data-aos='fade-right' className='blog-title'>Small Projects</h1>
                <h1 data-aos='fade-right' className='blog-title'>Some Are Under Construction</h1>
                {projects}
            </div>
        </div>
    );
}

export default SmallProjects;