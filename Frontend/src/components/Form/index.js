// React
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Component
import ErrorMessage from '../../components/ErrorMessage'

// Style
import './style.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { userSignin } from '../../redux/features/auth/authActions'


function Form () {

  const [usernameValue, setUsernameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [authenticationError, setauthenticationError] = useState(false);

  const { userToken, userProfile, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (userToken !== null && userProfile !== null && error === null) navigate('/user')
  }, [navigate, userToken, userProfile, error])

  function signin(e) {
    e.preventDefault()
    usernameValue === "" ? setUsernameError(true) : setUsernameError(false)
    passwordValue === "" ? setPasswordError(true) : setPasswordError(false)
    if (usernameValue !== "" && passwordValue !== ""){
      dispatch(userSignin([usernameValue, passwordValue]))
    }
  }
  
  return (
    <div>
      {error !== null && setauthenticationError(true)}
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
        
        <button type="submit" className="form-button" onClick={(e) => signin(e)}>Sign In</button>
        <ErrorMessage display={authenticationError} text="Authentication failed. Please try again." />
      </form>
    </div>
  )
}
  
export default Form