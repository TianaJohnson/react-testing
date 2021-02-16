import React from 'react';
import './Header.scss';
import Logo from './../../assets/image/lblogo.jpg';

const Header = (props) => {
    return (
        <header className="header" data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoImg" src={Logo} alt="logo"/>
                </div>
            </div>
        </header>
    )
};

export default Header; 

// oh me?, im jusr trying to figure it out