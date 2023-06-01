import React from 'react'
import { useRecoilState } from 'recoil'
import { capitalize } from './Util/Strings'
import { orderedDrinks } from './Util/Atoms'
import { DrinkTableRow } from './DrinkTableRow'
import { drinkPrices } from './Util/App.Config'
import './DrinksTable.scss'

export const DrinksTable = () => {
    //this state is coming from Atoms. 
    const [theOrderedDrinks, setOrderedDrinks] = useRecoilState(orderedDrinks)

    //Its going to take in item and value.
    const onHandleClick = (item, value) => {
        //Makes a copy of ordered drink object
        // the three dots is making a copy
        const drinks = {...theOrderedDrinks}
        
        //
        if (value === -1 && drinks[item] === 0) {
           //you're exiting out the function
            return;
        }
        drinks[item] += value
        setOrderedDrinks(drinks)
    }

    return (
        <div className='DrinksTable'>
            <table className='DrinkTable_Table'>
                <tbody>
                    {
                        drinkPrices.map(i => {
                            return <DrinkTableRow 
                                key={ i.id }
                                item={ i.type }
                                displayName={ capitalize(i.type) }
                                theOrderedDrinks={ theOrderedDrinks } 
                                onHandleClick={ (item, value) => onHandleClick(item, value) }
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
