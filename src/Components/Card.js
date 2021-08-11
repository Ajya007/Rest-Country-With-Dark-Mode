import React from 'react'
import Cards from './Cards.js'

function Card({filtredcountries,clickHandler,setStatus}) {

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    };
    return (

      
        <div className="main-sec">
               <div className='select'>
                <select onChange={statusHandler} name='lists' className='filter-lists'>
                 <option value='all'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </div>
      
      <div className='card'>
            {filtredcountries.map(el => <Cards key={el.name}  el={el} clickHandler={clickHandler}/>)}
         
        </div>
        </div>
    )
}

export default Card
