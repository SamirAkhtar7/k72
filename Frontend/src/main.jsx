import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Stair from './components/common/Stair.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NavContextProvider from "./context/navContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stair>
        <NavContextProvider>
          
          <App />
       </NavContextProvider>
    
      </Stair>
    </BrowserRouter>
  </StrictMode>
);
