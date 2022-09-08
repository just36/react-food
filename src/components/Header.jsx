import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="deep-purple lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Food
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/just36?tab=repositories">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
