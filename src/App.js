import React from 'react';
import Header from "./Header";
import './Style.css';
import Main from "./Main";
import Foother from "./Foother";

function App(props) {
    return (
        <div className="App">
            <Header />
            <Main />
            <Foother />
        </div>
    );
}

export default App;