import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h4>Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h4>Area: {recipe.strArea}</h4> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((item) => {
                if (item.includes('Ingredient') && recipe[item]) {
                  return (
                    <tr key={item}>
                      <td>{recipe[item]}</td>
                      <td>{recipe[`strMeasure${item.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: '2rem 0' }}>Video Recipe</h5>
              <iframe
                title="id"
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
          <button
            style={{ 'margin-top': '2rem' }}
            className="btn deep-purple lighten-2"
            onClick={goBack}
          >
            Go Back
          </button>
        </div>
      )}
    </>
  );
};

export { Recipe };
