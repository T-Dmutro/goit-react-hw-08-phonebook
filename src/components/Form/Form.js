import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useAddContactMutation, useFetchContactsQuery } from 'redux/contacts/contactApi';

function FormContact({ nameId, numberId }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 const [addContact] = useAddContactMutation(); 
 const {data} = useFetchContactsQuery();

  const handelChange = event => {
    const onName = event.currentTarget.name;
    const value = event.currentTarget.value;

    switch (onName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addNewContact = async () => {  
    const availableContact = await data.some(
    (contact) => contact.name.trim().toLowerCase().includes(name.toLowerCase()))
    
    if (availableContact) {
      return toast.error(`${name} is already in contacts!`);
      } else {
      await addContact({name, number});
      };
};

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handelSubmit = event => {
    event.preventDefault();
    addNewContact();
    reset();
  };


  return (
  <>
    <Form onSubmit={handelSubmit}>

      <Form.Group className="mb-3" >
      <Form.Label htmlFor={nameId}>
        Name
        <Form.Control style={styles.input}
          type="text"
          value={name}
          name="name"
          onChange={handelChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label htmlFor={numberId}>
        Number
        <PhoneInput
          type="tel"
          value={number}
          name="phone"
          onChange={setNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Form.Label>
      </Form.Group>

      <Button variant="success" type="submit">Add contact</Button>
    </Form>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="dark"
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
  </>
  );
};


export default FormContact;

const styles = {
  input: {
      width: '155%',
      marginTop: '16px',
  },
};