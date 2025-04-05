import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button } from "@material-tailwind/react";

// Import the string from the .env with URL of the API/server - http://localhost:5005
// const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  return (
  <>
   <Header />
   <Button>Button</Button>
    <div className="home-page">
        <h1>Welcome to Party Games Inc.!</h1>
        <p>Let us manage your event (birthday/cocktail party) on your behalf!</p>
        <p>We specialize in scripted event based games that we stage for you at a time and a place of your choosing</p>
        <p>The quoted price includes venue hire and snacks and we arrange an open bar made available on the evening at the standard prices</p>
        <p>Each guest is given a character sheet and a goal. They are provided with a full event brief in their inbox well in advance</p>
        <p>Each guest is expected to arrive as their character on the evening (costumes and props is their own responsibility even though suggestions are provided in the brief sheet)</p>
        <p>Party Games Inc. takes care of the whole event and the scripted party storyline which allows you to enjoy your special evening free of care!</p>
        <Link to="/signup">Sign up</Link>&nbsp;&nbsp;&nbsp;<Link to="/login">Login</Link>
    </div>
    <Footer />
  </>
   
  );
}

export default HomePage;
