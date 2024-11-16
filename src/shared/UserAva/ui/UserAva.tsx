import cls from "./UserAva.module.css"
import ava from "../../../assets/ava.jpg"

const UserAva = () => {
    return (<div className={cls.user__icon}>
        <img className={cls.icon} src={ava} alt="" />
    </div>  );
}
 
export default UserAva;