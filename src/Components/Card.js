import React from 'react'
import Cards from './Cards.js'

function Card({contries,clickHandler}) {
    return (
        <div className='card'>
            {contries.map(el => <Cards key={el.name}  el={el} clickHandler={clickHandler}/>)}
         
        </div>
    )
}

export default Card
