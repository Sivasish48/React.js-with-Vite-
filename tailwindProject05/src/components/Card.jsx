import React from "react";

/*
// In react , Every functional component have the access to the feature called as props.
// In React, "props" is a short form of "properties," and it's a fundamental concept for passing data from one component to another. 
// Props are a crucial aspect of building React applications, as they facilitate the composition and reusability of components by enabling communication between them.


function Card(props){

    // As we have declared name = "peps" in card tag in App.jsx
    // let us see that while consoling 

    console.log(props.name); // Peps
*/


// instead of writng the props as parameter we can directly pass the evaluated expresiion in the paranthesis as well as in the html tag.


// Other wise if the value of the evaluated expression is none like the 3 <div/>, we pass that on the App() as the parameter as if all the non writen evaluated expression will be that passed parameter.
function Card({name ="unknown",theBtnText = "view profile"}){

return(
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{name}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {theBtnText} →
    </button>
  </div>
</div>

 )
}

export default Card