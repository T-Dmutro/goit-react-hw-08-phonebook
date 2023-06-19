import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppBar from 'components/AppBar';
import { GlobalStyle } from "components/GlobalStyle/GlobalStyle";
import authOperations from './redux/auth/authOperation';
import PrivatRoute from './components/PrivatRout';
import PublicRoute from './components/PublicRoute';
import authSelectors from './redux/auth/authSelectors';
import Container from './components/GlobalStyle/GlobalStyleConteiner';
import {SpinnerApp} from './components/Spinner/SpinnerApp';

const HomePageView = lazy(() => import(`./views/HomePageView/HomePageView`));
const ContactsRoutsView = lazy(() => import(`./views/ContactsRoutsView/ContactsRoutsView`));
const LoginFormView = lazy(() => import(`./views/LoginFormView`));
const RegisterFormView = lazy(() => import(`./views/RegisterFormView`));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurren);
  // console.log(isFetchingCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
   <Container>
    {isFetchingCurrentUser ? (
      <SpinnerApp/>
      ) : (
        <>
    <GlobalStyle/>
    <AppBar />
    <Suspense fallback={<SpinnerApp/>}>
      <Routes>
        <Route path="/" element={
          <PublicRoute redirectTo="/">
            <HomePageView />
          </PublicRoute>
        }/>

        <Route path="/register" element={
            <PublicRoute restricted redirectTo="/contacts">
              <RegisterFormView />
            </PublicRoute>
        } />
        <Route path="/login" element={
            <PublicRoute restricted redirectTo="/contacts">
              <LoginFormView />
            </PublicRoute>
        } />
        <Route path="/contacts" element={
            <PrivatRoute redirectTo="/login" >
              <ContactsRoutsView />
            </PrivatRoute>
        }>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Suspense>
    </>
    )}
  </Container>)

};


export default App;




