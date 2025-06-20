import { Link } from "react-router-dom";
import style from "./Logo.module.less";
import Rsvg from "@/assets/image/R.svg";
import TokenSvg from "@/assets/image/token.svg";

const Logo = ({ closeDrawer }) => {
  return (
    <Link
      to="/"
      className={style.logoContainer}
      onClick={() => {
        closeDrawer?.();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <img className={style.logoIcon} src={Rsvg} alt="logoIcon" />
      <img src={TokenSvg} className={style.logoTitle} alt="logotitle" />
    </Link>
  );
};

export default Logo;
