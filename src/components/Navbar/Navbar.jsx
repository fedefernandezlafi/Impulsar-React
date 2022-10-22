import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
// import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.scss";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar" id="navbar">
      <LinkScroll className="navbar__logo">
        <img
          className="navbar__logo__header"
          src="./assets/composiciones del logo/COMPOSICION1_LOGO/PNG/LOGO_EN GRIS CLARO-01-recortado.png"
          alt="Impulsar Dev Solutions"
        />
      </LinkScroll>
      {menuClicked ? (
        <FiMenu
          size={25}
          className="navbar__menu"
          onClick={toggleMenuClicked}
        />
      ) : (
        <FiX size={25} className="navbar__menu" onClick={toggleMenuClicked} />
      )}

      <ul
        className={
          menuClicked ? "navbar__list" : "navbar__list navbar__list--active"
        }
      >
        <li className="navbar__item">
          <LinkScroll
            activeClass="active"
            className="navbar__links"
            to="navbar"
            offset={20}
            spy={true}
            smooth={true}
            duration={1300}
          >
            {" "}
            Inicio{" "}
          </LinkScroll>
        </li>
        <li className="navbar__item">
          <LinkScroll
            className="navbar__links"
            to="services"
            offset={30}
            spy={true}
            smooth={true}
            duration={1300}
          >
            {" "}
            Servicios{" "}
          </LinkScroll>
        </li>
        <li className="navbar__item">
          <LinkScroll
            className="navbar__links"
            to="us"
            offset={20}
            spy={true}
            smooth={true}
            duration={1300}
          >
            {" "}
            Nosotros{" "}
          </LinkScroll>
        </li>
        <li className="navbar__item">
          <LinkScroll
            className="navbar__links"
            to="form"
            offset={20}
            spy={true}
            smooth={true}
            duration={1300}
          >
            {" "}
            Contacto{" "}
          </LinkScroll>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
