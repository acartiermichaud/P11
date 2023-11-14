// React Router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Pages
import Home from '../../pages/Home'
import SignIn from '../../pages/SignIn'
import User from '../../pages/User'
import Error from '../../pages/Error'

// Component
import Footer from '../../components/Footer'

// Style
//import '../../styles/my-router.scss'


function MyRouter () {
  
  return (
    <Router>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />}/>
          <Route path="/sign-in" element={<SignIn />} errorElement={<Error />}/>
          <Route path="/user" element={<User />} errorElement={<Error />}/>
          <Route path="/error" element={<Error />} errorElement={<Error />}/>
          <Route path="*" element={<Error />} errorElement={<Error />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
  
export default MyRouter