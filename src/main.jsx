import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
export const MainContext = createContext();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext.Provider value="data from main Component">
      <App />
    </MainContext.Provider>
  </StrictMode>,
)
