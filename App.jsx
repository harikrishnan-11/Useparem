import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Profile from "./Profile";
import Settings from "./Settings";
import UX from "./UX";
import UI from "./UI";
import Web from "./Web";
import Customers from "./Customers";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="hero-page">

        <header>
          <h5>Hari krishnan</h5>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Service">Service</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Settings">Settings</Link>
            <Link to="/Customers">Customers</Link>
          </nav>

          <div className="letstalk">
            <button>Let's Talk</button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />}>
            <Route path="UX" element={<UX />} />
            <Route path="UI" element={<UI />} />
          </Route>
          
          <Route path="/Web" element={<Web />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Customers/:id" element={<Customers />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
