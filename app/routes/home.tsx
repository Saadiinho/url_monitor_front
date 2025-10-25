import React from "react";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
    return (
        <div style={{ marginTop: "100px", textAlign: "center" }}>
            <h1>Mon moteur de recherche</h1>
            <SearchBar />
        </div>
    );
};

export default Home;
