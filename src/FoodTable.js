import React from 'react'
import {useRecoilState} from "recoil"
import { orderedFoods } from './Util/Atoms'
import { foodPrices } from './Util/App.Config'
import { FoodTableRow } from './Util/FoodTableRow'
import { capitalize } from './Util/Strings'
// import { Value } from 'sass'

export const FoodTable = () => {
  //this state is coming from Atoms. 
  const[theOrderedFoods, setOrderedFoods]= useRecoilState
  (orderedFoods)
  
  // its going to take in item and value. 
  const onHandleClick =(item, value) =>{
    const foods ={...theOrderedFoods}
    if(value === -1 && foods[item]===0){
      return;
    }
    foods[item] +=value;
    setOrderedFoods(foods)
  }
  
  return (
    <div className='FoodsTable'>
      <table className='FoodsTable_Table'>
        <tbody>
          {
            // This shows the rows of foods. foodPrices is linked to App.conf
            foodPrices.map(food=>{
              return <FoodTableRow
              key={food.id}
              item={food.type}
              displayName={capitalize(food.type)}
              theOrderedFoods={theOrderedFoods}
              onHandleClick={(item, value)=>
              onHandleClick(item, value)}
                />
              

            })
          }
        </tbody>
      </table>
    
    </div>
  )
}
