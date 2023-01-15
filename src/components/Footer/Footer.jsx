import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <h3 className="footer-text">copyright© {currentYear} Victor Vasconcelos</h3>      
        </footer>
    );
};