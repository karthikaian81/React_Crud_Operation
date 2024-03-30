import React from 'react';
import { useState } from 'react';
import './Test.css';

function Test(){

    const [dishName,lastDishName] = useState('Get Today Random Dish')
    
    const getMenuRandom =() => {
        const Dishes= ["Mexican","Chinese","Western","Italian","North Indian","South Indian","Tamil Konu nadu"];
        var DishNumber = Math.floor(Math.random()*(Dishes.length-1))
        var Dish = Dishes[DishNumber] ;
        lastDishName('Today Dish is '+Dish);
    }

    const displayDishName = () => {
        
       console.log(dishName);
    }

    return(
        <div className='Test-bg'>
            <button onClick={getMenuRandom}>Get Today Dish</button>
            <p>{dishName}</p>
        </div>
    );
}

export default Test;