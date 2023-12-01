// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Button ({styleName, action, text}) {
  
  return (
    <button className={styleName} onClick={action}>{text}</button>
  )
}

Button.propTypes = {
  styleName: PropTypes.string,
  action: PropTypes.func,
  text: PropTypes.string
}
  
export default Button