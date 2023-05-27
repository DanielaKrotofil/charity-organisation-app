
import './sass/main.scss'
import React from 'react';
import {
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet
} from 'react-router-dom';
import Home from './components/home';
import { LoginForm } from './components/login';
import { RegisterForm } from './components/register';
import { LogoutForm } from './components/logout';
import GiveThingsBack from './components/oddaj-rzeczy';
import Navigation from './components/Navigation';

const Layout = () => {
    const getStyle = () => ({ isActive }) => (isActive ? { fontWeight: 400 } : undefined);

    return (
      <>
        <nav className="mainNav container">
          <ul>
            <li>
              <NavLink
                className="mainNav__login noborder"
                style={getStyle()}
                to="logowanie"
                isActive={(match, location) => {
                  if (match) {
                    return true;
                  }
                  return false;
                }}
              >
                Zaloguj
              </NavLink>
            </li>
            <li>
              <NavLink
                className="mainNav__registration"
                style={getStyle()}
                to="rejestracja"
                isActive={(match, location) => {
                  if (match) {
                    return true;
                  }
                  return false;
                }}
              >
                Załóż konto
              </NavLink>
            </li>
          </ul>
        </nav>
        <Navigation />
        <Outlet />
      </>
    );
  };
  
const App = () => {
  return (
      <HashRouter>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='logowanie' element={<LoginForm />} />
                  <Route path='rejestracja' element={<RegisterForm />} />
                  <Route path='wylogowano' element={<LogoutForm/>}/>
                  <Route path='oddaj-rzeczy' element={<GiveThingsBack/>}/>
              </Route>
          </Routes>
      </HashRouter>
  )
}

export default App