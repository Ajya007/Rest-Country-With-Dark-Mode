import React from 'react'
import {Link } from 'react-router-dom';



function Cards({el,clickHandler}) {
  
    return (
        <Link to="/detail" style={{ textDecoration: 'none' }}>
        <div className='cards' onClick={() => clickHandler(el.name)}>
            <img src={el.flag}></img>
        <h1>{el.name}</h1>
        <p>population:{el.population}</p>
        <p>region:{el.region}</p>
        <p>capital:{el.capital}</p>
        </div>
        </Link>
    )
}

export default Cards
