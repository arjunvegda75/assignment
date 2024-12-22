import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './HomePage.jsx'
import MainSlider from './MainSlider.jsx'
import Crud from './Crud.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HomePage/>
    <MainSlider/>
    <Crud/>
  </StrictMode>,
)
