import { useAppSelector } from '../../hook';
import { getItems, getFilter } from '../../redux/selectors';
import ContactItem from '../ContactItem';
import { UlContacts } from './ContactList.styled';

const ContactList = () => {

  const filter = useAppSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
   
  const contacts = useAppSelector(getItems);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

  
  return (
    <UlContacts>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          name={name}
          phone={phone}
          id={id}
        />
      ))}
    </UlContacts>
  )
};

export default ContactList;

