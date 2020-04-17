import React from 'react'
import './Footer.css'

export default function Footer(props){
    return (
        <footer className='moderate-pink'>
            <nav className='social-media'>
                <a data-aos='fade-down' href=''><i className="fab fa-github"></i></a>
                <a data-aos='fade-down' href=''><i className="fab fa-linkedin-in"></i></a>
                <a data-aos='fade-down' href=''><i className="fas fa-blog"></i></a>
            </nav>
            <p>© 2020. Isael Lizama. All rights reserved. Website Design by <a>AMJ</a></p>
        </footer>
    )
}