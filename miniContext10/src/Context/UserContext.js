import React from 'react'


// React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.
// In other words, React context allows us to share data (state) across our components more easily .


/*

React context is great when you are passing data that can be used in any component in your application.

These types of data include:

Theme data (like dark or light mode)
User data (the currently authenticated user)
Location-specific data (like user language or locale)

*/

// now create a user context

const UserContext = React.createContext()


// createContext is a function provided by React that creates a context object. This context object comes with two components: Provider and Consumer (or alternatively, the useContext hook).

export default UserContext






