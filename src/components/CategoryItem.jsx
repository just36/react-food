import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.split(' ').slice(0, 14).join(' ')}...</p>
      </div>
      <div className="card-action">
        <Link
          to={`/category/${strCategory}`}
          className="btn deep-purple lighten-2"
        >
          Watch Category
        </Link>
      </div>
    </div>
  );
};

export { CategoryItem };
