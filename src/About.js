import './App.css';
import Contact from './Contact';

function About() {
  let x=[
  {text:"Virgo",image:"https://i.pinimg.com/236x/a9/d5/d7/a9d5d7e5d5d9cceaa5797936f620f57e.jpg"},
  {text:"Leo",image:"https://i.pinimg.com/236x/f5/60/12/f56012a12e133cf38cc898d9ad566f97.jpg"},
  {text:"Taurus",image:"https://i.pinimg.com/236x/ae/84/ab/ae84abea31c7222cf55989e4492e1df3.jpg"},
  {text:"Sagittarius",image:"https://i.pinimg.com/236x/2f/ab/98/2fab9858301001b7c4a31536d9d37855.jpg"},
  {text:"capricorn",image:"https://i.pinimg.com/236x/41/f4/fa/41f4fa37d4b29ae5b9510c3a4dd890ae.jpg"},
  {text:"aquarius",image:"https://i.pinimg.com/236x/76/fb/d1/76fbd1f0572b646ddd97181eca2049da.jpg"},
  {text:"pisces",image:"https://i.pinimg.com/236x/9d/99/c5/9d99c5140dc325bad9cdda038130b502.jpg"},
  {text:"aries",image:"https://i.pinimg.com/236x/24/2c/72/242c72906e0258d6e79ce67123262efc.jpg"},
  {text:"gemini",image:"https://i.pinimg.com/236x/21/5d/1f/215d1fd3533b8cc1a1b12015c660fdc6.jpg"},
  {text:"libra",image:"https://i.pinimg.com/236x/93/06/89/930689963c1939fc5ec4989719f1f478.jpg"},
  {text:"scorpio",image:"https://i.pinimg.com/236x/1d/17/a1/1d17a1165dc4cadb60e2134aa6588842.jpg"},
  {text:"cancer",image:"https://i.pinimg.com/236x/d4/86/a5/d486a5f1842d30da234ab14cfd743950.jpg"}
]
  return (
    <div><h1>Share Us your opinion </h1>
    <div className="about">
    
    {x.map((y)=>{
      return (
        <div class>
   
          <h1>{y.text}</h1>
          <img src={y.image}></img>
          <Contact/>
        </div>
      )
      
      
    })}
    </div>
    </div>
  );
}

export default About;