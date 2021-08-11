import './scss/style.css';
import {useEffect, useState} from 'react';
import Darkmode from './Components/DarkMode.js';
import axios from 'axios';
import Card from './Components/Card.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Detail from './Components/Detail.js'

function App() {
const [filtredData,setFiltredData]=useState([])
const [filterState,setFilterState]=useState(false)
const [status,setStatus]=useState('all')
const [filtredcountries,setFilteredCountries] = useState([])




   

useEffect(() => {
if(status){

  if(status==="all"){
    const fetchData= async() => {
      const res=await axios('https://restcountries.eu/rest/v2/all'); 
      setFilteredCountries(res.data);
      
      }
      fetchData();
  

  }else{
  const fetchFiltredData= async() => {
    const res=await axios(`https://restcountries.eu/rest/v2/region/${status}`); 
    setFilteredCountries(res.data);
    
    }
    fetchFiltredData();
  }
  }
   
  
 
}, [status])



const clickHandler = async(id) =>{

const data= await filtredcountries.filter(element => element.name === id )

setFiltredData(data)
setFilterState(true)

}








  return (

     <>

<Router>
<div className="container">
     <header>
       <h1>Where in the world?</h1>
       <Darkmode />

       </header>
      

       <Route path="/" exact render={(props) =>(
      <Card  
      filtredcountries={filtredcountries}
       clickHandler={clickHandler}
       setStatus={setStatus}
       />
       )} />
      <Route path="/detail" exact render={(props) =>(
   filterState && <Detail filtredData={filtredData}/> 
       )} />
</div>


</Router>
      
    

     </>


  );
}

export default App;
