// React
import { useEffect } from 'react'

// Components
import Tab from '../../components/Tab'

// Style
import './style.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { authSignout } from '../../redux/features/auth/authActions'
import { userGetProfile, userCleanProfile } from '../../redux/features/user/userActions'


function Menu () {

  const { userToken } = useSelector((state) => state.auth)
  const { userProfile} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken !== null && userProfile === null) {
      dispatch(userGetProfile())
    }
  }, [dispatch, userToken, userProfile])

  function signout(e) {
    e.preventDefault()
    dispatch(authSignout())
    dispatch(userCleanProfile())
  }

  return (
    <div>
      {userToken === null && <Tab path="/sign-in" iconClass="icon fa fa-user-circle" text="Sign In"/>}

      {(userToken !== null && userProfile !== null) &&
        <div className="tab-container">
          <Tab path="/user" iconClass="icon fa fa-user-circle" text={userProfile.userName}/>

          <button className="sign-out_button" to="" onClick={(e) => signout(e)}>
            <i className="icon fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      }
    </div>
  )
}
  
export default Menu