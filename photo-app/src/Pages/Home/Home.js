import React from 'react';
import Menu from '../../components/Menu/menu';
import Main from '../../components/Main/Main';
import './Home.css';

function Home() {
    return (
        <div >
            <header className="header">
                <nav className='navbar'><Menu /></nav>
                <br />
            </header>
            <Main />
            <footer>
                <p className='footer'>Contact Us</p>
            </footer>
            
        </div>
    )
}

export default Home;