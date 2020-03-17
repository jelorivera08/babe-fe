import React, { useState, useEffect } from 'react';
import AdminDashboard from './components/Admin';


const DashBoard = () => {
  const accountTypeFromLocStorage = window.localStorage.getItem('accountType');
  const [accountType, setUserType] = useState('');

  useEffect(() => {
    if (accountTypeFromLocStorage) {
      setUserType(accountTypeFromLocStorage);
    } else {
      setUserType(false);
    }
  }, [accountTypeFromLocStorage]);


  return (
    <div>
      {accountType === 'admin'
        ? (
          <AdminDashboard />
        )
        : <div>random dashboard</div>}
    </div>

  );
};


export default DashBoard;
