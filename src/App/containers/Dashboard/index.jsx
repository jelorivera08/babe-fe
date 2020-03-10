import React, { useState, useEffect } from 'react';
import Background from '../../components/Background';


const DashBoard = () => {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const userTypeFromLocStorage = window.localStorage.getItem('userType');
    if (userTypeFromLocStorage) {
      setUserType(userTypeFromLocStorage);
    } else {
      setUserType(false);
    }
  }, []);


  return (
    <div>
      {userType === 'admin'
        ? (
          <Background>
            <div>admin dashboard</div>
          </Background>
        )
        : <div>random dashboard</div>}
    </div>

  );
};


export default DashBoard;
