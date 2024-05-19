import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.list}>
      <ul className={css.items}>
        {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
