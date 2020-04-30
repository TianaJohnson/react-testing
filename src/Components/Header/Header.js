import React from 'react';
import './Header.scss';
import Logo from './../../assets/image/lblogo.jpg';

const Header = (props) => {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
            </div>
        </header>
    )
};

export default Header; 