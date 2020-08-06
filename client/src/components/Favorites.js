import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import API from '../utils/API';

function Favorites() {
  const [faves, setFaves] = useState([]);

  const getFaves = async () => {
    const res = await API.getFavorites();
    console.log(res);
    setFaves(res);
  };

  useEffect(() => {
    getFaves();
  }, []);

  const renderedFaves = (faves) => {
    if (!faves.length) {
      return <h1 className='text-center'>You haven't saved any recipes</h1>;
    }

    return faves.map((fave) => (
      <RecipeCard
        key={fave.title}
        title={fave.title}
        sourceUrl={fave.sourceUrl}
        ingredients={fave.ingredients}
        image={fave.image}
      />
    ));
  };

  return (
    <div
      className='container'
      style={{
        maxWidth: '1000px',
        backgroundColor: '#9F6B99FF',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>My Favorite Recipes</h2>
      <div class='ui link cards'>{renderedFaves(faves)}</div>
    </div>
  );
}

export default Favorites;
