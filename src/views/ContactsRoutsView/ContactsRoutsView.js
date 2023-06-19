import FormContact from '../../components/Form/index';
import ContactList from '../../components/ContactList/index';
import Filter from '../../components/Filter/index';
import Container from '../../components/GlobalStyle/GlobalStyleConteiner';

const styles = {
  form: {
      maxWidth: 500,
      margin: 10,
  },
};

function ContactsRoutsView () {
  
    return(
        <Container>
        <section title="Phonebook" style={styles.form}>
          <h1>Телефонна книга</h1>
          <FormContact/>
        </section>
        <section title="Contacts" style={styles.form}>
          <h2>Контакти</h2>
          <Filter/>
          <ContactList/>
        </section>
      </Container>
    )
}


export default ContactsRoutsView;