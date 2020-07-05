import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function home () {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello, this is collection of my react projects
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
                <Link to="/about">About</Link>
            </header>
        </div>
    );
}