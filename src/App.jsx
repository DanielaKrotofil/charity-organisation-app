
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

const Layout = () => {

  const getStyle = () => ({ isActive }) => isActive ? { fontWeight: 400 } : undefined
  return (
      <>
          <nav className='mainNav container'>
              <ul>
                  <li><NavLink className='mainNav__login' style={getStyle()} to='logowanie'>Zaloguj</NavLink></li>
                  <li><NavLink className='mainNav__registration' style={getStyle()} to='rejestracja'>Załóż konto</NavLink></li>
              </ul>
          </nav>
          <Outlet/>
      </>
  )
}

const App = () => {
  return (
      <HashRouter>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='logowanie' element={<LoginForm />} />
                  <Route path='rejestracja' element={<RegisterForm />} />
              </Route>
          </Routes>
      </HashRouter>
  )
}

export default App
/**
 Home (/)
Home – Organizations (/)
Home – Local (/)
Home – Logged In (/)
Form - Step 1 (/oddaj-rzeczy)
Form - Step 2 (/oddaj-rzeczy)
Form - Step 2 - Opened Select (/oddaj-rzeczy)
Form - Step 3 (/oddaj-rzeczy)
Form - Step 3 - Opened Select (/oddaj-rzeczy)
Form - Step 4 (/oddaj-rzeczy)
Form - Summary (/oddaj-rzeczy)
Form - Thank You (/oddaj-rzeczy)
Login (/logowanie)
Register (/rejestracja)
Logoutn (/wylogowano)
 */