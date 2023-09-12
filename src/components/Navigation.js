import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={`text-white ${currentPage === 'About' ? 'nav-link text-body-secondary' : 'nav-link'}`}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={`text-white ${currentPage === 'Portfolio' ? 'nav-link text-body-secondary' : 'nav-link'}`}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={`text-white ${currentPage === 'Resume' ? 'nav-link text-body-secondary' : 'nav-link'}`}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={`text-white ${currentPage === 'Contact' ? 'nav-link text-body-secondary' : 'nav-link'}`}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
