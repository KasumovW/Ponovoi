import React from 'react';
import Flogo from './LogoBlack.svg';

function FootherLogo(props) {
    return (
        <div>
            <div className="Flogo">
                <img src={Flogo} alt="Flogo"/>
            </div>
        </div>
    );
}

export default FootherLogo;