import React, { useState } from 'react';
import NavTabs from './nav';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
// import Resume from './pages/resume';
import Form from './pages/form';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // returns components to render based on the current value of currentPage.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Form />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

