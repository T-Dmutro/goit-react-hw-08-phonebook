import { useSelector } from 'react-redux'; 
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';
import authSelectors from '../redux/auth/authSelectors';

const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2A363B',
    },
  };


const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <header style={styles.header}>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}          
        </header>
    )
}


export default AppBar;
