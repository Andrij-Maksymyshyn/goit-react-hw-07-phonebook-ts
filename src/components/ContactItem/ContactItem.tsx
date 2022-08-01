import {useAppSelector, useAppDispatch} from '../../hook';
import { removeContact } from '../../redux/PhonebookSlice';
import { TContact } from '../../redux/PhonebookSlice';
import { LiContact, ButtonDelete } from './ContactItem.styled';

const ContactItem = ({ name, id, phone }: TContact) => {
  const {error} = useAppSelector(state => state.contacts);
  const dispatch = useAppDispatch();
  

  return (
    <>
      {error && <h2>Can\'t delete task. Server error.</h2>}
      <LiContact>
      {name}: {phone} 
      <ButtonDelete type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </ButtonDelete>
      </LiContact>
    </>    
  )
};

export default ContactItem;


