import React, { useState } from "react";

import '../styles/Home.css';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
    const [cityName, setCityName] = useState("");

    return (
        <>
        <Header />
        <main className="main">
            <section className="main-section-search">
                <input type="text" className="search-input-name" 
                placeholder="Search for a city..." onChange={(event) => setCityName(event.target.value)} />
                <button className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default Home;