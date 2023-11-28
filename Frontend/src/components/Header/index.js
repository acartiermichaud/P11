// Components
import Logo from '../../components/Logo'
import Menu from '../../components/Menu'

// Style
import './style.scss'


function Header () {
  
  return (
    <nav className="main-nav">
      <Logo/>
      <Menu/>
    </nav>
  )
}
  
export default Header