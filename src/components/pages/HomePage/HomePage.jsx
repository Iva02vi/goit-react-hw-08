import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.main}>
      <p className={css.text}>
        Welcome! This app is designed to help you save and organize the phone
        numbers of your friends, colleagues, and other important contacts. With
        this app, there is no need to carry a bulky notebook — just use your
        mobile phone to quickly search for the number you need. We hope you find
        this app helpful!
      </p>
      {isLoggedIn ? (
        <p className={css.text}>
          Go to the{" "}
          <Link className={css.link} to="/register">
            Contact list
          </Link>
          .
        </p>
      ) : (
        <p className={css.text}>
          To view your saved phone numbers, please{" "}
          <Link className={css.link} to="/register">
            Register
          </Link>{" "}
          or{" "}
          <Link className={css.link} to="/login">
            Login
          </Link>{" "}
          .
        </p>
      )}
    </div>
  );
};

export default HomePage;
