import preview from "../../../assets/preview.webp";
import UserAva from "../../../shared/UserAva";

import cls from "./Media.module.css";

const Media = () => {
    return ( <div className={cls.media}>
        <div className={cls.preview__container}>
          <img className={cls.preview} src={preview} alt="" />
          <p className={cls.preview__time}>5:00</p>
        </div>
        <div className={cls.preview__description}>
          <UserAva />
          <div className={cls.preview__description__info}>
            <p className={cls.preview__title}>Небойся я друг</p>
            <p className={cls.name__channel}>igor</p>
            <p className={cls.preview__viewers}>Просмотры 100 тысч</p>
          </div>
        </div>
      </div> );
}
 
export default Media;