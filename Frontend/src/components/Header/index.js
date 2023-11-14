// Components
import Logo from '../../components/Logo'
import Menu from '../../components/Menu'

// Style
import './style.scss'


function Header ({user}) {
  
  return (
    <nav className="main-nav">
      <Logo />
      <Menu user={user}/>
    </nav>
  )
}
  
export default Header