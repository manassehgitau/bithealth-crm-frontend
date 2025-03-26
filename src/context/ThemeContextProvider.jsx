import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState(null); // New state for storing user information

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const loginUser = (userData) => {
    setUser(userData); // Store user information in the global context
    localStorage.setItem('userDetails', JSON.stringify(userData)); // Optionally store in localStorage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, user, loginUser }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
