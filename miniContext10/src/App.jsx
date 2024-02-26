import UserContextProvider from "./Context/UserContextProvider"

import { Login, Profile } from './index.js';


function App() {


  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
