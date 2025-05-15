import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

const Navbar: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const openModal = () => setShowAuthModal(true);
  const closeModal = () => setShowAuthModal(false);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={openModal}>Get Started</button>
          </li>
        </ul>
      </nav>

      {showAuthModal && (
        <div>
          <button onClick={closeModal} aria-label="Close modal">
            &times;
          </button>
          <AuthForm />
        </div>
      )}
    </>
  );
};

export default Navbar;
