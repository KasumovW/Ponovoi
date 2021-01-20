import React from 'react';
import Numbers from "./Numbers";
import ButtonOne from "./ButtonOne";

function Main(props) {
    return (
        <div>
            <div className="line"></div>
            <Numbers />
            <ButtonOne />
        </div>
    );
}

export default Main;