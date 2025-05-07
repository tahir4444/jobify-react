import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';

import { Navbar, SmallSidebar, BigSidebar } from '../components';
import { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: 'John Doe', role: 'admin' }; // Example user object
  //const isAdmin = user.role === 'admin'; // Check if the user is an admin

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  //const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkTheme = () => {
    //setIsDarkTheme(!isDarkTheme);
    console.log('Dark theme toggled!');
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    // Perform logout logic here
    console.log('User logged out!');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        isDarkTheme,
        toggleDarkTheme,
        showSidebar,
        setShowSidebar,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
