import React from 'react'
import './Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
                <nav className = "NavbarItems">
                    <h1>BookWorm</h1>
                
                <ul className = "nav-menu">
                    <li><a href="/">Newsfeed</a></li>
                    <li><a href="/">Search</a></li>
                    <li><a href="/">Write a Review</a></li>
                </ul>
                </nav>
        )
    }
}

export default Navbar