import React from 'react';

function ButtonOne(props) {
    return (
        <div>
            <div className="btn">
                <div className="buttons buttons-1"
                    onClick={() => {props.setBot(props.bot + 3)}}>Увеличить</div>
                <div className="buttons buttons-2"
                     onClick={() => {
                    if (props.bot >= 2) {
                        props.setBot(props.bot - 2)
                    } else {
                        if(props.bot === 1) {
                            props.setBot(props.bot - 1)
                        }
                    }
                }}>Уменьшить</div>
                <div className="buttons buttons-3"
                     onClick={() => {
                    props.setBot(0)
                }}>Сбросить</div>
            </div>
        </div>
    );
}

export default ButtonOne;