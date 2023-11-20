// React
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

// Component
//import Input from '../../components/Input'
import Button from '../../components/Button'
import ErrorMessage from '../../components/ErrorMessage'

// Style
import './style.scss'
import '../Input/style.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { selectSignin } from '../../utils/selectors'
import { fetchSignin } from '../../features/signin'


function Form () {

  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [authenticationError, setauthenticationError] = useState(false);

  let navigate = useNavigate();

  const dispatch = useDispatch()
  const signin = useSelector(selectSignin)
  
  function login () {
    usernameValue === "" ? setUsernameError(true) : setUsernameError(false)
    passwordValue === "" ? setPasswordError(true) : setPasswordError(false)
    
    if (usernameValue !== "" && passwordValue !== "") {
      dispatch(fetchSignin([usernameValue, passwordValue]))
      signin.status === "resolved" ? navigate("/user") : setauthenticationError(true)
    }
  }
  
  return (
    <form>
  
      <div className="input-wrapper">
        <label className="input-wrapper_label" htmlFor="username">Username</label>
        <input className="input-wrapper_field" type="text" id="username" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)}/>
      </div>
      <ErrorMessage display={usernameError} text="Please enter your username." />

      <div className="input-wrapper">
        <label className="input-wrapper_label" htmlFor="password">Password</label>
        <input className="input-wrapper_field" type="text" id="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}/>
      </div>
      <ErrorMessage display={passwordError} text="Please enter your password." />

      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label className="input-remember_label" htmlFor="remember-me">Remember me</label>
      </div>
      
      <Button id="form-button" styleName="button button_sign-in" path='/user' text="Sign In" onClick={() => {login()}}/>
      <ErrorMessage display={authenticationError} text="Authentication failed. Please try again." />
    </form>
  )
}
  
export default Form