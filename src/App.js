import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Page from "./Components/Page"

class App extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Page />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

