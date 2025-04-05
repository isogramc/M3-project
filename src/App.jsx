import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import IsAdmin from "./components/IsAdmin";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Dash from "./pages/Dash";
import EventCreatePage from "./pages/EventCreatePage";
import { Routes, Route } from 'react-router';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<IsAnon><HomePage /></IsAnon>} />
        <Route path="/event/create" element={<IsPrivate><EventCreatePage /></IsPrivate>} />
        <Route path="/dashboard" element={<IsPrivate><Dashboard /></IsPrivate>} />
        <Route path="/admin/dashboard" element={<IsAdmin><Dash /></IsAdmin>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/signup" element={<IsAnon><SignUpPage /></IsAnon>} />
      </Routes>
    </>
  )
}

export default App
