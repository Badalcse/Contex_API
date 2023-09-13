
import './App.css'
import Login from './component/Login'
import UserContext from './context/UserContex'
import UserContextProbider from './context/UserContextProbider'

function App() {
  

  return (
   <UserContextProbider>
    <h1>hello badal</h1>
    <Login/>
    <profile/>
   </UserContextProbider>
  )
}

export default App
