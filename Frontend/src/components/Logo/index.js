// React component
import { Link } from 'react-router-dom'

// Style
import './style.scss'

// Image
import argentBankLogo from '../../images/argentBankLogo.png'


function Logo () {
  
  return (
    <Link className="main-nav-logo" to='/'>
        <img className='main-nav-logo_image' src={argentBankLogo} alt='Argent Bank Logo'/>
        <h1 className="sr-only">Argent Bank</h1>
    </Link>
  )
}
  
export default Logo