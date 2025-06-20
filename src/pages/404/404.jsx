import { Link } from "react-router-dom";
import style from "./404.module.css";

const NotFound = () => {
  return (
    <div className={style.notFoundContainer}>
      <div className={style.notFoundContent}>
        <h2 className={style.notFoundTitle}>OOPS!</h2>
        <p className={style.notFoundBody}>
          This page can’t be hashed out <br /> <br />
          But don't worry, you're always safe with us, even on our 404 page
          <br />
        </p>
        <Link to="/" className={style.notFoundCTA}>
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
