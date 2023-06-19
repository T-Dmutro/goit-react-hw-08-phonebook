import {  Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
    link: { 
      fontWeight: '700',
      color: 'rgb(2 2 2)',
      background: 'rgb(7 233 128)',
    },
    item:{
        marginLeft: 10,
    }
};

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return(
        <Nav justify variant="tabs">
        <Nav.Item >
            <Nav.Link href="/goit-react-hw-08-phonebook/" style={styles.link}>Головна</Nav.Link>
        </Nav.Item>

        {isLoggedIn && (
        <Nav.Item style={styles.item}>
            <Nav.Link href="/goit-react-hw-08-phonebook/contacts" style={styles.link}>Контакти</Nav.Link>
        </Nav.Item>
         )}
        <Outlet/>
        </Nav>
    )
};

export default Navigation;


