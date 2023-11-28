// React
import { useState } from 'react'

// Component
import ErrorMessage from '../ErrorMessage'

// Style
import './style.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { userSetProfile} from '../../redux/features/user/userActions'


function EditForm ({setEditView}) {

  const { userProfile } = useSelector((state) => state.user)

  const [usernameValue, setUsernameValue] = useState(userProfile.userName)
  const [usernameError, setUsernameError] = useState(false)

  const dispatch = useDispatch()

  function saveEdit(e) {
    e.preventDefault()
    if (usernameValue !== ""){
      setUsernameError(false)
      setEditView(false)
      dispatch(userSetProfile(usernameValue))
    }
    else {
      setUsernameError(true)
    }
  }

  function cancelEdit() {
    setEditView(false)
  }

  function updateValue (value, type) {
    if (type==="username") {
      setUsernameValue(value)
      value === "" ? setUsernameError(true) : setUsernameError(false)
    }
  }
  
  return (
    <form className="edit-form">
      <div className="edit-wrapper">
        <label className="edit-wrapper_label" htmlFor="username">User name:</label>
        <div className="edit-contener">
          <input className="edit-wrapper_field" type="text" id="username" value={usernameValue} onChange={(e) => updateValue(e.target.value, "username")}/>
          <ErrorMessage display={usernameError} text="Please enter your new username." />
        </div>
      </div>

      <div className="edit-wrapper">
        <label className="edit-wrapper_label" htmlFor="firstname">First name:</label>
        <input className="edit-wrapper_field" type="text" id="firstname" value={userProfile.firstName} disabled="disabled"/>
      </div>

      <div className="edit-wrapper">
        <label className="edit-wrapper_label" htmlFor="lastname">Last name:</label>
        <input className="edit-wrapper_field" type="text" id="lastname" value={userProfile.lastName} disabled="disabled"/>
      </div>

      <div className="button-container">
        <button className="form-button" onClick={(e) => saveEdit(e)}>Save</button>
        <button className="form-button" onClick={() => cancelEdit()}>Cancel</button>
      </div>
    </form>
  )
}
  
export default EditForm