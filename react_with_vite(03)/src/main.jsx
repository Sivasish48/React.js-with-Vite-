import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(<h1>How war ur day?</h1>
  )
  // So here we got to know even the App.jsx is exporting App(), so in main.jsx we also declare and execute out custom function that is MyApp() instad of App().

}
function Hello(){
  return(
    <h1>hello there</h1>
  )
}
// Now create a custom object that we created in our previous folder.
// As we know jsx basically generalize the the function into an object , so let us give a try to defining a object first in jsx file and then try to execute it.
// Let us see how things work.

const ReactElement = {
  type:"s",
  props:{
      href:"https://www.google.com/",
      target : "_blank"
  },
  children:"Access GOOGLE"
}

  // now let us execute the object , because as we know the jsx generalise our functional based code to an one , so let us get 1 more step ahead after by executing the object direct.


  /*
  ReactDOM.createRoot(document.getElementById('root'))
.render(
    <div>
    <MyApp />
    <Hello />
    <ReactElement/> // 
    </div>
)
*/
// It is not working because the render() method is also designed recieve a functional parameter  not an object as parameter.

// example

const anchorElement = (
  <a href="https://www.google.com/">click to visit</a>
)


// let us see how React.createElement works
// React.createElement is a function in React that's used to create React elements, which are the building blocks of React applications.
// It takes three arguments:
// such as 
// The first argument is  type of the element, which can be a string representing an HTML tag.
// the second argument is a  object containing the element's properties, also known as props.It is optional.
// The third argument represents the children of the element.It is also optional.

// Example 

const theReactElement = React.createElement(
  "a",
  {href:"https://www.linkedin.com/in/sivasish48/"},
  "Click to visit profile."
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
   
  theReactElement
   
)
