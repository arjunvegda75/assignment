import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import CounterComp from './Counter/CounterComp.jsx';
// import store from './Counter/Store.js';
import store from './Crud/store.js';
import Crud from './Crud/Crud.jsx';

createRoot(document.getElementById('root')).render(
  <Provider  store={store}>
{/* <CounterComp/> */}
<Crud/>
  
  {/* // <StrictMode>
  
    // <App />
  // </StrictMode>, */}
  </Provider>
)
