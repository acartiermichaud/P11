// React
import { useState, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

// Components
import Header from '../../components/Header'
import EditForm from '../../components/EditForm'
import TransactionCard from '../../components/TransactionCard'

// Styles
import './style.scss'
import '../../components/Button/style.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { userGetProfile } from '../../redux/features/user/userActions'


function User () {

  const { userToken } = useSelector((state) => state.auth)
  const { userProfile, error } = useSelector((state) => state.user)

  const [editView, setEditView] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken !== null && userProfile === null) {
      dispatch(userGetProfile())
    }
    if (userToken === null || error !== null) {
      navigate('/error')
    }
  }, [dispatch, navigate, userToken, userProfile, error])

  function editUsername(e) {
    e.preventDefault()
    setEditView (true)
  }
  
  return (
    <div>
      {userToken === null && <Navigate to="/" />}

      {userProfile !== null &&
        <div>
          <Header/>
          <main className="main bg-dark">
            <div className="header">
              <div className="header_title">{editView ? <h1>Edit user info</h1> : <h1>Welcome back<br/>{userProfile.firstName} {userProfile.lastName}!</h1>}</div>
              <button className={editView ? "button button_edit isHidden" : "button button_edit isDisplayed"} onClick={(e) => editUsername(e)}>Edit Name</button>

              {editView && <EditForm setEditView={setEditView}/>}

            </div>
            <h2 className="sr-only">Accounts</h2>
            <TransactionCard title="Argent Bank Checking (x8349)" amount="$2,082.79" desc="Available Balance"/>
            <TransactionCard title="Argent Bank Savings (x6712)" amount="$10,928.42" desc="Available Balance"/>
            <TransactionCard title="Argent Bank Credit Card (x8349)" amount="$184.30" desc="Current Balance"/>
          </main>
        </div>
      }
    </div>
  )
}
  
export default User