import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5 relative" >
      <div className="container">
        <p className="mb-1">&copy; 2025 Crud Application. All Rights Reserved.</p>
        <small>
          Follow us on{' '}
          <a href="#" className="text-light">
            Facebook
          </a>
          ,{' '}
          <a href="#" className="text-light">
            Twitter
          </a>
          ,{' '}
          <a href="#" className="text-light">
            Instagram
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
