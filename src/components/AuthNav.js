import { Outlet } from 'react-router-dom';
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

const AppBar = () => {
    return (
        <div>
            <Nav justify variant="tabs">
            <Nav.Item style={styles.item}>
                <Nav.Link href="/goit-react-hw-08-phonebook/register" style={styles.link}>Реєстрація</Nav.Link>
            </Nav.Item>
            <Nav.Item style={styles.item}>
                <Nav.Link href="/goit-react-hw-08-phonebook/login" style={styles.link}>Логін</Nav.Link>
            </Nav.Item>
            </Nav>
            <Outlet/>
        </div>
    )
}


export default AppBar;



