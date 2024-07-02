import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";
import css from "./Contact.module.css";

const Contact = ({ contactInfo: { id, name, number } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatNumber = (inputNumber) => {
    const pattern = /(\d{3})(\d{3})(\d{2})/;
    const formatedNumber = inputNumber.replace(pattern, "$1-$2-$3");
    return formatedNumber;
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.item}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {formatNumber(number)}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleOpen}>
        Delete
      </button>
      <ModalDelete isOpen={isOpen} onClose={handleClose} id={id} />
    </div>
  );
};
export default Contact;
