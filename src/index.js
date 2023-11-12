import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/game' element={<App />} />
      <Route path='/game2' element={<App2 />} />
      <Route path='/timerGame1' element={<App3 />} />
      <Route path='/timerGame2' element={<App4 />} />

      </Routes>
      
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
