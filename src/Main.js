import React, {useState} from 'react';
import Numbers from "./Numbers";
import ButtonOne from "./ButtonOne";

function Main(props) {

    const [bot, setBot] = useState(0);

    return (
        <div>
            <div className="line"></div>
            <Numbers bot={bot} />
            <ButtonOne bot={bot} setBot={setBot} />
        </div>
    );
}

export default Main;