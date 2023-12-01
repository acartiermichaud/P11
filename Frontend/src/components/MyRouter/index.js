// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Profile from '../../pages/Profile'
import Error from '../../pages/Error'

// Component
import Footer from '../../components/Footer'


function MyRouter () {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />}/>
        <Route path="/login" element={<Login />} errorElement={<Error />}/>
        <Route path="/profile" element={<Profile />} errorElement={<Error />}/>
        <Route path="/error" element={<Error />} errorElement={<Error />}/>
        <Route path="*" element={<Error />} errorElement={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  )
}
  
export default MyRouter