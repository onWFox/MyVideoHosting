import logo from "../../../assets/logo.png";
import bell from "../../../assets/bell.png";
import "./Navbar.css";

import Search from "./Search";
import Burger from "./Burger";


const Navbar = () => {
  

  return (
    <div className="header__container">
      <header className="header">
        <div className="header__left">
          <Burger  /> 
          
          <button className="btn__logo">
            <img className="logo" src={logo} alt="" />
          </button>
        </div>
        <div className="header__center">
          <Search/>
        </div>
        <div className="header__right">
          <button className="header__notification">
            <img className="notification" src={bell} alt="" />
          </button>
          <div className="heaeder__user__icon"></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
