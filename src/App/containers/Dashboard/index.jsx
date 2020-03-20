import React, { useState, useEffect } from 'react';
import AdminDashboard from './components/Admin';


const DashBoard = () => {
  const [accountType, setUserType] = useState('');

  useEffect(() => {
    const accountTypeFromLocStorage = window.localStorage.getItem('accountType');
    if (accountTypeFromLocStorage) {
      setUserType(accountTypeFromLocStorage);
    } else {
      setUserType(false);
    }
  }, [accountType]);


  return (
    <div>
      {accountType === 'ADMIN'
        ? (
          <AdminDashboard />
        )
        : <div>random dashboard</div>}
    </div>

  );
};


export default DashBoard;
