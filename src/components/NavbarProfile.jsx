import React, { useState, useEffect } from 'react';

function NavbarProfile() {
  // Use state to hold user details
  const [user, setUser] = useState({
    name: 'John Doe',
    role: 'Admin Store',
  });

  // On component mount, retrieve user details from localStorage
  useEffect(() => {
    try {
      const userDetails = localStorage.getItem('userDetails');
      if (userDetails) {
        const parsedDetails = JSON.parse(userDetails);
        setUser({
          name: parsedDetails.user?.name || 'John Doe', // Fallback to default name
          role: parsedDetails.user?.role ? capitalizeFirstLetter(parsedDetails.user.role) : 'Admin Store', // Fallback to default role
        });
      }
    } catch (error) {
      console.error('Error parsing user details from localStorage:', error);
    }
  }, []);

  // Helper function to capitalize the first letter of the role
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='flex space-x-5 items-center md:pr-5'>
      <div className='cursor-pointer'>
        <img src="./assets/imgs/person-placeholder.jpg" alt="A placeholder of a person" className='w-10 h-10 md:w-10 md:h-10 rounded-full'/>
      </div>
      <div className='hidden lg:inline'>
        <h3 className='font-bold text-gray-900 dark:text-white text-lg'>{user.name}</h3>
        <p className='text-sm text-gray-600 dark:text-gray-300'>{user.role}</p>
      </div>
    </div>
  );
}

export default NavbarProfile;

