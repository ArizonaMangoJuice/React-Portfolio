import React, {useEffect, useState, useCallback} from 'react'
import './Header.css'

export default function Header (props) {
    let [height,setHeight] = useState(0)
    let [prevScrollPos, setScrollPosition] = useState(window.pageYOffset)
    let [visible,setVisible] = useState(true)

    // grab the height of the current ref
    const measuredRef = useCallback(node => {
        if(node !== null){
            
           if(height) setHeight(node.getBoundingClientRect().height)
        }
    },[height])
        
    let handleScroll = () => {
        const currentScrollPos = window.pageYOffset
        const visible = 800 > currentScrollPos
        setVisible(visible)
        if(prevScrollPos) setScrollPosition(currentScrollPos)
    }

    // add a scroll event listener when mounted and unmounted
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    
    return (
        <header 
            ref={measuredRef}
            className={`header  moderate-pink ${visible ? 'header-hidden' : ''}`}
            >
            <img alt='logo of website' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2FIsael%20LIZAMa%20(4).png?alt=media' />
        </header>
    )
}