// React
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Component
import ErrorMessage from '../ErrorMessage'

// Style
import './style.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { authSignin } from '../../redux/features/auth/authActions'


function SigninForm () {

  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [authenticationError, setauthenticationError] = useState(false)

  const { userToken, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (userToken !== null && error === null) {
      navigate('/user')
    }
    if (error !== null) {
      setauthenticationError(true)
    }
  }, [navigate, userToken, error])

  function signin(e) {
    e.preventDefault()
    usernameValue === "" ? setUsernameError(true) : setUsernameError(false)
    passwordValue === "" ? setPasswordError(true) : setPasswordError(false)
    if (usernameValue !== "" && passwordValue !== ""){
      dispatch(authSignin([usernameValue, passwordValue]))
    }
  }

  function updateValue (value, type) {
    if (type==="email") {
      setUsernameValue(value)
      value === "" ? setUsernameError(true) : setUsernameError(false)
    }
    if (type==="password") {
      setPasswordValue(value)
      value === "" ? setPasswordError(true) : setPasswordError(false)
    }
  }
  
  return (
    <form>
      <div className="input-wrapper">
        <label className="input-wrapper_label" htmlFor="username">Username</label>
        <input className="input-wrapper_field" type="email" id="username" value={usernameValue} onChange={(e) => updateValue(e.target.value, "email")}/>
      </div>
      <ErrorMessage display={usernameError} text="Please enter your username." />

      <div className="input-wrapper">
        <label className="input-wrapper_label" htmlFor="password">Password</label>
        <input className="input-wrapper_field" type="password" id="password" value={passwordValue} onChange={(e) => updateValue(e.target.value, "password")}/>
      </div>
      <ErrorMessage display={passwordError} text="Please enter your password." />

      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label className="input-remember_label" htmlFor="remember-me">Remember me</label>
      </div>
      
      <button className="form-button" onClick={(e) => signin(e)}>Sign In</button>
      <ErrorMessage display={authenticationError} text="Authentication failed. Please try again." />
    </form>
  )
}
  
export default SigninForm