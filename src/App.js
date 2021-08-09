import './scss/style.css';
import {useEffect, useState} from 'react';
import Darkmode from './Components/DarkMode.js';
import axios from 'axios';
import Card from './Components/Card.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Detail from './Components/Detail.js'

function App() {
const [contries,setContries]=useState([])
const [filtredData,setFiltredData]=useState([])
console.log(filtredData)




const clickHandler = (id) =>{

 setFiltredData(contries.filter(element => element.name === id ))
}
useEffect(() =>{

  const fetchData= async() => {
    const res=await axios('https://restcountries.eu/rest/v2/all'); 
    console.log(res)
    setContries(res.data)
    
    }
    fetchData();

},[])

  return (

     <>

<Router>
     <header>
       <h1>Where in the world?</h1>
       <Darkmode />

       </header>

       <Route path="/" exact render={(props) =>(
      <Card  
       contries={contries}
       clickHandler={clickHandler}
       />
       )} />
      <Route path="/detail" exact render={(props) =>(
      <Detail  
      filtredData={filtredData}
       />
       )} />



</Router>
      
    

     </>


  );
}

export default App;
