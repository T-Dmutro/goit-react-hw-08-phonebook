import {  useSelector } from "react-redux";
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactApi';
import { MutatingDots } from  'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactList = () => {
  const { data = [], isFetching, isError, error } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter);


  const mapFilterContacts = data?.filter(({name}) => 
  name.trim().toLowerCase().includes(filter.toLowerCase()));

  const handleDeleteContact = contactId => {
    deleteContact(contactId);
  };

  const possibleСonditions =  data  && !isFetching && !isFetching && <h1>{data.name}</h1>;
  return (
    <>
    {possibleСonditions} 
    {isError && toast.error(`${error.data}`)}
    {isFetching &&  <MutatingDots ariaLabel="loading-indicator" />} 
          <ListGroup >
          {mapFilterContacts.map(({ name, id, number }) => {
            return (
            <ListGroup.Item as="li" key={id} style={styles.container}>
            <p>
              {name}: {number}
            </p>
            <Button variant="danger" type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </Button>
          </ListGroup.Item>
          )}
          )}
        </ListGroup>
   <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

    
    </>
  );
};

export default ContactList;


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5px',
  },
};