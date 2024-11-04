import home from "../../../assets/home.png";
import shorts from "../../../assets/shorts.png";
import history from "../../../assets/history.png";
import playlist from "../../../assets/playlist.png";

import cls from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../../../app/providers/SidebarProvider";

const Sidebar = () => {
  const { show } = useSidebarContext();
  const sidebarlist = [
    {
      name: "Главная",
      to: "/",
      icon: home,
    },
    {
      name: "Shorts",
      to: "/shorts",
      icon: shorts,
    },
    {
      name: "History",
      to: "/history",
      icon: history,
    },
    {
      name: "Playlists",
      to: "/playlists",
      icon: playlist,
    },
  ];

  const newSiderList = sidebarlist.map((item, index) => {
    return (
      <li className={cls.sidebar__list__box} key={index}>
        {show ? (
          <>
            <NavLink to={item.to}>{item.name}</NavLink>
          </>
        ) : (
          ""
        )}
        <NavLink to={item.to}>
          <img className={cls.icon} src={item.icon} alt="" />
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={`${cls.sidebar} ${show ? cls.show : ""}`}>
      <ul>{newSiderList}</ul>
    </nav>
  );
};

export default Sidebar;
