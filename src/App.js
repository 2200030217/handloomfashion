import MainNavBar from './main/MainNavBar';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AdminNavBar from "./admin/AdminNavBar"

export default function App() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  
    useEffect(() => {
      const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
      
      setIsAdminLoggedIn(adminLoggedIn);
    }, []);
  
    const onAdminLogin = () => {
      localStorage.setItem('isAdminLoggedIn', 'true');
      setIsAdminLoggedIn(true);
    }
  return (
    <div className="App">
      <Router>
      {isAdminLoggedIn ? (
          <AdminNavBar />
        ) :(
          <MainNavBar
            onAdminLogin={onAdminLogin}
          />
        )}
      </Router>
    </div>
  );
}

