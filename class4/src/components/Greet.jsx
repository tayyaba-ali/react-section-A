import React, { useEffect, useState } from "react";
// import List from "./List";

const Greet = ({ name, course }) => {
let [count,setCount] =   useState(0)
let [userName,setUserName] = useState(name)

// console.log(count);
// console.log(setCount);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
  
},[userName])

 
  function increment() {
   setCount(count+1)
  }

  return (
    <div>
      <p>{userName}</p>
      <button onClick={()=>{setUserName("Laiba")}}>change name</button>
      <p> count: {count}</p>
      <button onClick={increment}>increase</button>
    </div>
  );
};

export default Greet;
