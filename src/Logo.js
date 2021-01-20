import React from 'react';
import Logo from './Logo.svg';

function LogoHeader(props) {
    return (
        <div className="Logoo">
            <img src={Logo} alt='Logo'/>
        </div>
    );
}

export default LogoHeader;