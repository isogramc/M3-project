import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <Router>
     <AuthProviderWrapper>
      <App />
     </AuthProviderWrapper>
    </Router>
    </ThemeProvider>
  </StrictMode>,
)
