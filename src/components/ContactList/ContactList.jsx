import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isloggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isloggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isloggedIn]);

  return filteredContacts.length !== 0 ? (
    <ul className={css.list}>
      {filteredContacts.map((item) => (
        <li key={item.id} className={css.item}>
          <Contact contactInfo={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p className={css.text}>Phonebook is empty!</p>
  );
};

export default ContactList;
