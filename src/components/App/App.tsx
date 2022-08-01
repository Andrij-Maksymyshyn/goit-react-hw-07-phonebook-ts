import { useEffect } from 'react';
import { fetchContacts } from '../../redux/PhonebookSlice';
import {useAppSelector, useAppDispatch} from '../../hook';
import { getItems } from '../../redux/selectors';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';


function App() {
  const contacts = useAppSelector(getItems);
  const {isLoading, error} = useAppSelector(state => state.contacts);
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  


 return (
    <Container>
      <h1>Phonebook</h1>
     <ContactForm />
     
     {isLoading && <h2>Loading...</h2>}
     {error && <h2>An error occurred: {error.message}</h2>}

      {contacts.length > 0 && (
       <>
         <h2>Contacts</h2>
          <Filter />
          <ContactList />
         </>
     )}
     
    </Container>
  )
};

export default App;
