import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Close auth modal on successful authentication
  useEffect(() => {
    if (isAuthenticated) {
      setShowAuthModal(false);
    }
  }, [isAuthenticated]);

  const openModal = () => setShowAuthModal(true);
  const closeModal = () => setShowAuthModal(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

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
          {!isAuthenticated && (
            <li>
              <button onClick={openModal}>Get Started</button>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>

      {showAuthModal && (
        <div>
          <div>
            <button onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <AuthForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
