import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './components/navbar/ScrollToTop'
 import { ToastContainer } from 'react-toastify';
import { HashRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
 
  <StrictMode>
   <HashRouter>
    <ScrollToTop/>
    <App />
      <ToastContainer />
   </HashRouter>
  </StrictMode>
 
)
