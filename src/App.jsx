import {} from 'styled-components'
import {AuthPage} from './pages/authPage'
import { useState } from 'react'
import "./style.scss"

function App() {
  const mainUser = {
    email: 'steve.jobs@example.com',
    password: 'password'
  }

  const [user, setUser] = useState({email: ''})
  const [error, setError] = useState('')

  const Login = (details) =>{
    if (details.email === mainUser.email && details.password === mainUser.password){
      setUser({
        email: details.email,
        password: details.password
      })
    }
    else{
      if(details.email !== mainUser.email){
        setError(details.email)
      }
    }
  }

  const logout = () => {
    setUser({
      email: '',
      password: ''
    })
  } 

  return (
    <div className="App">
      {
      (user.email !== "") ? (
        <div className="authedForm">
          <center>
          <div className="logo">ONLY.</div>
            <div className="mainLogin">
              <span>Здравствуйсте, <strong>{user.email}</strong></span>
              <div className="logout"><button onClick={logout}>Выход</button></div>
            </div>
          </center>
        </div>
      ):(<AuthPage Login={Login} error={error}/>)
      }
    </div>
  );
}

export default App;
