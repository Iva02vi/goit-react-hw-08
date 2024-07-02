import { useSelector } from "react-redux";
import ContactForm from "../../ContactForm/ContactForm";
import ContactList from "../../ContactList/ContactList";
import SearchBox from "../../SearchBox/SearchBox";
import Loader from "../../Loader/Loader";
import { selectLoader } from "../../../redux/auth/selectors";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const loading = useSelector(selectLoader);

  return (
    <div className={css.main}>
      <ContactForm />
      <SearchBox />
      {loading ? <Loader /> : <ContactList />}
    </div>
  );
};

export default ContactsPage;
