import React from 'react';
import FootherLogo from "./FootherLogo";
import FootherMenu from "./FootherMenu";
import FootherInfo from "./FootherInfo";

function Foother(props) {
    return (
        <div className="Foother">
            <FootherLogo />
            <FootherMenu />
            <FootherInfo />
        </div>
    );
}

export default Foother;