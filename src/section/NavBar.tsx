import React, { useState } from "react";
import { menuItens } from "../constants/menuItens";
import "../styles/NavBar.css";
import Logo from "../assets/brancante-logo-bg-removed.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleMenuClick = (route: string) => {
    setMenuActive(false); // Fecha o menu quando qualquer item é clicado

    if (route === "Form") {
      navigate("/form");
    } else if (route === "About") {
      navigate("/About");
    } else if (route === "Mission") {
      navigate("/Mission");
    } else if (route === "Accidents") {
      navigate("/Accidents");
    } else if (route === "Services") {
      navigate("/Services");
    } else if (route === "Business") {
      navigate("/Business");
    } else if (route === "/") {
      navigate("/");
    } else {
      const section = document.getElementById(route);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleMenuClick("/")}>
          <img src={Logo} alt="Logo" />
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-list ${menuActive ? "active" : ""}`}>
          <div className="container-close">
            <button className="close" onClick={toggleMenu}>
              <FaArrowLeft className="close" />
            </button>
          </div>
          {menuItens.map((item, index) => (
            <li key={index} className="navbar-item">
              <button
                className="navbar-link"
                onClick={() => handleMenuClick(item.route)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
