import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './Test';
import Home from './Home';
import Layout from './Layout';
import App from './App';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import TodoMain from './TodoMain';
import UserSignUp from './UserSignUp';
import UserProfileSignUp from './UserProfileSignUp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />} />
        <Route path='/AppMain' element={<App />} />
        <Route path='/UserSignup' element={<UserSignUp/>}>
          <Route path='/UserSignup/UserProfile' element={<UserProfileSignUp/>}></Route>
        </Route>
      </Routes>
      <AppFooter/>  
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
