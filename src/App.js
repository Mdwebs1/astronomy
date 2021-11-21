import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  return (

    <Router>
    <div className="App">
   <Nav/>
   <Switch>
   <Route path="/" exact component={Pages}/>
   <Route path="/home" component={Home}/>
   <Route path="/about" component={About}/>
  
   {/* <Route path="/contact" component={Contact}/> */}
   </Switch>
    </div>
    </Router>
  );
}

const Pages =()=>{
  const[horoscope , setHoroscope] = useState('')
  const[userInput , setUserInput] = useState('')

  function taurus(){
    axios 
    .get(`https://ohmanda.com/api/horoscope/${userInput}`)
    .then(data => setHoroscope(data.data))
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    taurus()
  },[userInput])

  return (
  <div className="Pages">

  <h1>Choose Your Astrological Sign </h1>
  {/* <input onChange={e=>setUserInput(e.target.value)}></input> */}
  <p>{horoscope.horoscope}</p>
  <p>{horoscope.date}</p>
  <p>{horoscope.sign}</p>



 <h1 onClick={e => taurus()}></h1>

 <div className="card" onChange={e=>setUserInput(e.target.value)}>
 <div className="img-card1">
 <button onClick={()=>setUserInput("virgo")}>Virgo</button>
 </div>
 
 <div className="img-card2">
 <button onClick={()=>setUserInput("leo")}>Leo</button>
 </div>
 <div className="img-card3">
 <button onClick={()=>setUserInput("taurus")}>Taurus</button>
 
 </div>
 <div className="img-card4">
 <button onClick={()=>setUserInput("sagittarius")}>Sagittarius</button>
 </div>
 <div className="img-card5">
 <button onClick={()=>setUserInput("capricorn")}>capricorn</button>
 </div>
 <div className="img-card6">
 <button onClick={()=>setUserInput("aquarius")}>aquarius</button>
 </div>
 <div className="img-card7">
 <button onClick={()=>setUserInput("pisces")}>pisces</button>
 </div>
 <div className="img-card8">
 <button onClick={()=>setUserInput("aries")}>aries</button>
 </div>
 <div className="img-card9">
 <button onClick={()=>setUserInput("gemini")}>gemini</button>
 </div>
 <div className="img-card10">
 <button onClick={()=>setUserInput("libra")}>libra</button>
 </div>
 <div className="img-card11">
 <button onClick={()=>setUserInput("scorpio")}>scorpio</button>
 </div>
 <div className="img-card12">
 <button onClick={()=>setUserInput("cancer")}>cancer</button>
 </div>
 </div>

  </div>
  )
}
export default App;
