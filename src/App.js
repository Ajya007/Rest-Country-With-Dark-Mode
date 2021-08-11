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
const [filterState,setFilterState]=useState(false)
const [status,setStatus]=useState('All')
const [filtredcountries,setFilteredCountries] = useState([])

console.log(filtredData)



   

const filterHandler =() => {
  switch (status){
    case 'Asia':
      setFilteredCountries(contries.filter(el => el.region === 'Asia'));
      break;
     case 'Americas':
       setFilteredCountries(contries.filter(el => el.region === 'Americas'));
       break;
       case 'Africa':
        setFilteredCountries(contries.filter(el => el.region === 'Africa'));
        break;
        case 'Europe':
          setFilteredCountries(contries.filter(el => el.region === 'Europe'));
          break;
          case 'Oceania':
            setFilteredCountries(contries.filter(el => el.region === 'Oceania'));
            break;
            case 'All':
             setFilteredCountries(contries);
              break;
     default:
       setFilteredCountries(contries);
       break;
  }
};

useEffect(() => {
  filterHandler();
},[status]);




const clickHandler = async(id) =>{

const data= await filtredcountries.filter(element => element.name === id )

setFiltredData(data)
setFilterState(true)

}







useEffect(() =>{

  const fetchData= async() => {
    const res=await axios('https://restcountries.eu/rest/v2/all'); 
    console.log(res)
    setContries(res.data)
    setFilteredCountries(res.data);
    
    }
    fetchData();

},[])

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
