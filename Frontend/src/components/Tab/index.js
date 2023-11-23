// React component
import { Link } from 'react-router-dom'

// Style
import './style.scss'


function Tab ({path, iconClass, text}) {
  
  return (
    <Link className="main-nav-item" to={path}>
      <i className={iconClass}></i>
      {text}
    </Link>
  )
}
  
export default Tab