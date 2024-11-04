
import { useSidebarContext } from "../../../../../app/providers/SidebarProvider";
import cls from "./Burger.module.css";

const Burger = () => {
  const { toggleSidebar } = useSidebarContext();
  return (
    <button
      onClick={toggleSidebar}
      className={cls.btn__burger}
      id="burgerButton"
    >
      <div className={cls.burger}>
        <span></span>
      </div>
    </button>
  );
};

export default Burger;
