import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render () {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Sacha</h1> 
                {/* <i className="fab fa-react"></i> */}
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>  
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Me connecter</Button>
            </nav>
        )
    }
}

export default Navbar