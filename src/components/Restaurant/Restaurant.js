import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))

    }, [searchText])

    const searchFood = (e) =>{
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h1 className='text-4xl mt-3 justify-center'>Find the food you want</h1>
            <input onChange={searchFood} className='placeholder:italic  placeholder:text-slate-400 border rounded-md border-slate-400  py-2 pl-4 focus:outline-none mt-5 shadow-sm focus:border-sky-500' type="text" placeholder='search for any food' />
            <br></br>
            <h3>Result found: {meals.length}</h3>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal 
                    key={meal.idMeal}
                    meal={meal}
                ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;