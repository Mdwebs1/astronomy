import "./App.css";
import { useState } from "react";

let arr = [];
let showList;
function Contact() {
  const [name, setName] = useState([
    {
      firstName: "",
      commet: "",
    },
  ]);

  showList = name.map((x,index) => {
    if(x.firstName === "" && x.commet === "") {
      return(
        <div> 
        </div>
      )
    }else{
    return (
     <div >

      <h3>your name is : {x.firstName}</h3>
      
      <h3>your commet is : {x.commet}</h3>
      <button className="del" onClick={()=>removeItems(index)}>Delete</button>
      </div>
    );
    }
   });
  //onClick for putton
  function listValue(e) {
    e.preventDefault();
    console.log(e.target.parentElement.children[0].value);
    console.log(e.target.parentElement.children[1].value);
    //  setName({firstName:e.target.parentElement.children[0].value});
    arr = [
      ...name,
      {
        firstName: e.target.parentElement.children[0].value,
        commet: e.target.parentElement.children[1].value,
      }
    ];

    setName(arr)

    //  arr.push(e.target.parentElement.children[0].value);
      
  }
  function removeItems(index) {
    console.log(index)
    const array = name.slice();
    array.splice(index, 1);
    setName(array);
    // let del= e.target.parentElement;
    // del.remove(); 
    }
  return (
    <div>
      <form>
      
        <input type="text" value={name.firstName} placeholder="Write your name"></input> 
        <input type="text" value={name.commet} placeholder="Write your commet" ></input>
        <button type="submit" onClick={listValue}>input</button>
      </form>
      {showList}
    </div>
  );
}

export default Contact;
