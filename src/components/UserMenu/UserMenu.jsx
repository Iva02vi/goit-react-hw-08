import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { RxExit } from "react-icons/rx";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.greetingBox}>
      <p>
        Hello, <span>{user.name}</span>
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Exit
        <RxExit />
      </button>
    </div>
  );
};

export default UserMenu;
