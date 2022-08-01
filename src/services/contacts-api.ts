import axios from 'axios';
import { TContact } from '../redux/PhonebookSlice';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);
    return data;
};

export async function fetchContactByIdRem(contactId: string) {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
};

export async function fetchContactAdd(contact: TContact) {
    const { data } = await axios.post(`/contacts`, contact);
    return data;
};