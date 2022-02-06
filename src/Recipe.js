import React from 'react';

const Recipe = ({title,calories,image,ingredients}) => {
	return (
	 <div className="recipe-card">
		<h2>{title}</h2>
			<ol>
			{ingredients.map(ingredient => (
				<li>{ingredient.text}</li>
			))}
			</ol>
		<p>Calories: {calories}</p>
		<img src={image} alt="" />
		
	 </div>
	);
}

export default Recipe;