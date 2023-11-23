// React
import { Navigate } from 'react-router-dom'

// Components
import Header from '../../components/Header'
import Button from '../../components/Button'
import TransactionCard from '../../components/TransactionCard'

// Style
import './style.scss'

// Redux
import { useSelector } from 'react-redux'


function User () {

  const { userToken, userProfile } = useSelector((state) => state.auth)
  
  return (
    <div>
      {userToken === null && <Navigate to="/" />}

      {userProfile !== null ?
        <div>
          <Header user={userProfile.userName}/>
          <main className="main bg-dark">
            <div className="header">
              <h1 className="header_title">Welcome back<br/>{userProfile.firstName} {userProfile.lastName}!</h1>
              <Button styleName="button button_edit" path="" text="Edit Name"/>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <TransactionCard title="Argent Bank Checking (x8349)" amount="$2,082.79" desc="Available Balance"/>
            <TransactionCard title="Argent Bank Savings (x6712)" amount="$10,928.42" desc="Available Balance"/>
            <TransactionCard title="Argent Bank Credit Card (x8349)" amount="$184.30" desc="Current Balance"/>
          </main>
        </div>

        : <Navigate to="/error" />
      }
    </div>
  )
}
  
export default User