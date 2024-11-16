import logo from "../../../assets/logo.png";
import bell from "../../../assets/bell.png";
import cls from "./Navbar.module.css";

import Search from "./Search";
import Burger from "./Burger";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";
import UserAva from "../../../shared/UserAva";

const Navbar = () => {
  return (
    <div className={cls.header__container}>
      <header className={cls.header}>
        <div className={cls.header__left}>
          <Burger />
          <Button className={cls.btn__logo}>
            <Link to={"/"}>
              <img className={cls.logo} src={logo} alt="" />
            </Link>
          </Button>
        </div>
        <div className={cls.header__center}>
          <Search />
        </div>
        <div className={cls.header__right}>
          <Button className={cls.header__notification}>
            <img className={cls.notification} src={bell} alt="" />
          </Button>
          <UserAva/>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
