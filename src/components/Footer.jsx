import React from 'react';

function Footer() {
  return (
    <footer className="page-footer deep-purple lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/just36?tab=repositories"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
