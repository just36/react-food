import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      This page doesn't exist. Return to <Link to="/">Home</Link>
    </div>
  );
}

export { NotFound };
