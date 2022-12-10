import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const {strMeal, strMealThumb, idMeal} = props.meal;
    
    const navigate = useNavigate();
    const showMealDetail = () =>{
        // const path = `/meal/${idMeal}`;
        navigate('/meal/'+idMeal);
    }


    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            <Link style={{backgroundColor: 'orange', padding: '5px', color: 'white', borderRadius: '5px'}} to={`/meal/${idMeal}`}>show detail</Link> &nbsp; &nbsp;
            <button style={{backgroundColor: 'violet', color: 'white', padding: '5px', borderRadius: '5px',}} onClick={showMealDetail}>{strMeal} id:{idMeal}</button>
        </div>
    );
};

export default Meal;