import { useSelector } from "react-redux";
import LoginForm from "../../LoginForm/LoginForm";
import { selectLoader } from "../../../redux/auth/selectors";
import Loader from "../../Loader/Loader";

const LoginPage = () => {
  const loader = useSelector(selectLoader);
  return loader ? <Loader /> : <LoginForm />;
};

export default LoginPage;
