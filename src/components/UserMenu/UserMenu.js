import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './default-avatar.png';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperation';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      marginRight: 4,
    },
    name: {
      fontWeight: 700,
      marginRight: 12,
    },
    buttonOut: { 
      fontWeight: '700',
      color: 'rgb(2 2 2)',
      background: 'rgb(7 233 128)',
      borderColor: 'transparent',
    },
  };

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
console.log(name);
    return(
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Ласкаво просимо, {name}</span>
            <Button style={styles.buttonOut} type="button" onClick={() => dispatch(authOperations.logOut())}>
                Вийти
            </Button>
        </div>
    )
};

export default UserMenu;