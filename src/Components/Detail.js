import React from 'react'
import {Link} from 'react-router-dom';



function Detail({filtredData}) {

 
    return (
        <div className="detail">
            
            <Link to="/"style={{textDecoration:'none'}}><button className="back">Go Back</button></Link>

            <div className="country-detail">
            <div className="c-flag"><img src={filtredData[0].flag} alt="flag"/></div>
            <div className="c-detail">
                <h1>{filtredData[0].name}</h1>

                <div className="part">
                <section>
                    <p>
                        <span style={{fontWeight:600}}>Native Name: </span>{filtredData[0].nativeName}
                    </p>
                    <p>
                        <span style={{fontWeight:600}}>Population: </span>{filtredData[0].population}
                    </p>
                    <p>
                        <span style={{fontWeight:600}}>Region: </span>{filtredData[0].region}
                        </p>
                    <p>
                        <span style={{fontWeight:600}}>Sub Region: </span>{filtredData[0].subregion}
                    </p>
                    <p>
                        <span style={{fontWeight:600}}>Capital: </span>{filtredData[0].capital}
                    </p>
                 
                
                </section>
                
                <section>
                <p><span style={{fontWeight:600}}>Top level Domain: </span>{filtredData[0].topLevelDomain[0]}</p>
                <p><span style={{fontWeight:600}}>Currency: </span>{filtredData[0].currencies[0].name}</p>
                <p><span style={{fontWeight:600}}>Language: </span>{filtredData[0].languages[0].name}</p>
                </section>

                </div>


               
            </div>
            </div>

            
        </div>
    )
}

export default Detail
