import React from 'react'
import {Link } from 'react-router-dom';



function Cards({el,clickHandler}) {
  
    return (
        <Link to="/detail" style={{ textDecoration: 'none' }}>
        <div className='cards' onClick={() => clickHandler(el.name)}>
            <img src={el.flag} alt="flag"></img>
        <h1>{el.name}</h1>
        <p><span style={{fontWeight:600}}>Population:</span> {el.population}</p>
        <p><span style={{fontWeight:600}}>Region: </span>{el.region}</p>
        <p><span style={{fontWeight:600}}>Capital:</span>{el.capital}</p>
        </div>
        </Link>
    )
}

export default Cards
