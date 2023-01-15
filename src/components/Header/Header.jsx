import React from "react";

import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">JS.Weather</h1>
            <nav className="header-nav">
                <a href="https://github.com/Victorcelos/weather-app" target={"_blank"} className="header-option">
                    <button className="header-button">
                        <i className="fa-brands fa-github"></i> Repository
                    </button>
                </a>
            </nav>
        </header>
    );
};