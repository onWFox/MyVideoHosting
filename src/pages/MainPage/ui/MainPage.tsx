import { useSidebarContext } from "../../../app/providers/SidebarProvider";
import Media from "../../../shared/Media";
import cls from "./MainPage.module.css";




const MainPage = () => {
  const { show } = useSidebarContext();
  return (
    <div className={`${ show ? cls.mainOpen : cls.main} `}>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/> <Media/> <Media/> <Media/> <Media/> <Media/> <Media/> <Media/> <Media/> <Media/> <Media/>
      
    </div>
  );
};

export default MainPage;
