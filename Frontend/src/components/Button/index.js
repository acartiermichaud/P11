// React component
import { Link } from 'react-router-dom'

// Style
import './style.scss'


function Button ({styleName, path, text}) {
  
  return (
    <Link className={styleName} to={path}>
      {text}
    </Link>
  )
}
  
export default Button