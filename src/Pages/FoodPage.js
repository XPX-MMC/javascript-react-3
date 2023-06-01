import React from 'react'
import './FoodPage.scss'
import {FoodTable} from '../FoodTable'

export const FoodPage = () => {
  return (
    <div className='FoodPage'>
       <div className='Center_Content'>
          <div className='FoodPage_Header'>
                Food 
            </div>
            <div className='FoodPage_Content'>
              <FoodTable/>
            </div>

        </div>
      </div>
   
  );
};
