import { useState, useEffect } from "react";
import axios from "axios";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {


  return (
    <div className="home-page">
        <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
