// React
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Component
import Tab from '../../components/Tab'

// Style
import './style.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { authSignout } from '../../redux/features/auth/authActions'
import { userGetProfile, userCleanProfile } from '../../redux/features/user/userActions'


function Menu () {

  const { authToken } = useSelector((state) => state.auth)
  const { userProfile} = useSelector((state) => state.user)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (authToken !== null && userProfile === null) {
      dispatch(userGetProfile())
    }
  }, [dispatch, authToken, userProfile])

  function signout(e) {
    e.preventDefault()
    dispatch(authSignout())
    dispatch(userCleanProfile())
  }

  function goTo(e, path) {
    e.preventDefault()
    navigate(path)
  }

  return (
    <div>
      {authToken === null && <Tab action={(e) => goTo(e, "/login")} iconClass="icon fa fa-user-circle" text="Sign In"/>}

      {(authToken !== null && userProfile !== null) &&
        <div className="tab-container">
          <Tab action={(e) => goTo(e, "/profile")} iconClass="icon fa fa-user-circle" text={userProfile.userName}/>
          <Tab action={(e) => signout(e)} iconClass="icon fa fa-sign-out" text="Sign Out"/>
        </div>
      }
    </div>
  )
}
  
export default Menu