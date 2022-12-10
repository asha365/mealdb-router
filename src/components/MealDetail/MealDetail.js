import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetail.css';


const MealDetail = () => {
    const {mealId} = useParams();
    const [mealItem, setMealItem] = useState({});
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMealItem(data.meals[0]))
    }, [mealId])


    return (
        <div className='meal-detail'>
            <h1>This is detail of a meal: {mealId}</h1>
            <img src={mealItem.strMealThumb} alt="" />
            <h1>Name: {mealItem.strMeal}</h1>
            <p>Category: {mealItem.strCategory}</p>
            <p><span>strArea: {mealItem.strArea}</span></p>
            <p>Description: {mealItem.strInstructions?.slice(0, 100)}</p>
            
        </div>
    );
};

export default MealDetail;