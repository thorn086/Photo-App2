import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'
function Menu() {
    return (
        <div className="navbar_items">
            <h1> App Title</h1>
            <Link to='/'>Home</Link>
            <Link to='/photos'>Photos</Link>
            <Link to='about'>About</Link>
            <div className='navbar_btns'>
                <button id='Login'>Login</button>
                <button id='signup'>Sign Up</button>
            </div>
        </div>
    )
}
export default Menu;