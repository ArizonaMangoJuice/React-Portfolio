import React from 'react'
import './Footer.css'

export default function Footer(props){
    return (
        <footer className='moderate-pink'>
            <nav className='social-media'>
                <a href='https://github.com/ArizonaMangoJuice?tab=repositories'><i className="fab fa-github"></i></a>
                <a href='https://www.linkedin.com/in/isael-lizama-9a128b130/'><i className="fab fa-linkedin-in"></i></a>
                <a href='https://isaelblogs.netlify.app/'><i className="fas fa-blog"></i></a>
            </nav>
            <p>© 2020. Isael Lizama. All rights reserved. Website Design by <a className='footer-link' href='https://github.com/ArizonaMangoJuice?tab=repositories'>AMJ</a></p>
        </footer>
    )
}