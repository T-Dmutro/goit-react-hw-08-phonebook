import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperetions from '../redux/auth/authOperation';
import Form from 'react-bootstrap/Form';
import Container from '../components/GlobalStyle/GlobalStyleConteiner';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    form: {
        maxWidth: 500,
        margin: 10,

    },
};

const LoginFormView = () => {
    const dispath = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const chandleChange = ({target: {name, value}}) => {
        switch(name){
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const loginUser = () => {  
         if (email === ''){
            return toast.error(`Entry is not possible`);
          }else if (password === ''){
            return toast.error(`Entry is not possible`);
        } else {
            dispath(authOperetions.logIn({email, password}))
        }
    };

    const chandleSubmit = (element) => {
        element.preventDefault();
        loginUser();
        setEmail('');
        setPassword('');
    }

    return(
        <Container>
        <h1>Увійти</h1>
        <Form onSubmit={chandleSubmit} style={styles.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Введіть email</Form.Label>
                <Form.Control 
                name="email"
                value={email}
                onChange={chandleChange}
                type="email"
                placeholder="Введіть email" />
                <Form.Text className="text-muted">
                Ми ніколи нікому не поділимося вашою електронною поштою.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control 
                name="password"
                value={password}
                onChange={chandleChange}
                type="password" 
                placeholder="Пароль" />
            </Form.Group>
            <Button variant="success" type="submit">
                Увійти
            </Button>
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
        </Container>
    )
};

export default LoginFormView;