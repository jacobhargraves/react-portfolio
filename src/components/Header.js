import React, { useState } from 'react';
import NavTabs from './Navigation';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';

const styles = {
  header: {
    background: '#375b6a'
  }

}

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <header>
      <nav className="navbar navbar-expand-md header" aria-label="Fourth navbar example" style={styles.header}>
        <div className="container-fluid">
          <a className="navbar-brand logo text-light" href="#about">Jake.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          </div>
        </div>
      </nav>
    </header>
    {renderPage()}
    <Footer currentPage={currentPage}/>
    </>
  );
}