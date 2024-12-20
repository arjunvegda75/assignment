import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Components/Counter';
import Listview from './Components/Listview';
import LoginLogout from './Components/LoginLogout';
import MoveElementMouse from './Components/MoveElementMouse';
import ModalRegistrationForm from './Components/ModalRegistrationForm';
import ModalLogin from './Components/ModalLogin';
import Todo from './Components/Todo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Counter />
    <Listview />
    <LoginLogout/>
    <MoveElementMouse/>
    <ModalLogin/>
    <ModalRegistrationForm/>
    <Todo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
