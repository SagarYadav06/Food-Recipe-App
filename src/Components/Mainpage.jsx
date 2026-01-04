import React from 'react'
import Mealcards from './Mealcards'
import { data } from 'react-router'

const Mainpage = () => {
  return (
    <>
      <div className='container'>
        <div className='searchBar'>
          <input type='text' placeholder='Enter Dish' />
          <button>Search</button>
        </div>

        <div>
          <Mealcards detail={data}/>
        </div>
      </div>
    </>
  )
}

export default Mainpage
