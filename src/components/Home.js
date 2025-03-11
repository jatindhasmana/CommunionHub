import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import '../App.css';

const Home = () => (
  <div className="home">
    <header className="hero">
      <h1>Connecting People Across Faiths & Interests</h1>
      <p>Connecting people of all faiths through events and community support.</p>
      <Link to="/events" className="cta-button">Explore Events</Link>
    </header>
  </div>
);

export default Home;