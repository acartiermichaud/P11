// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function ErrorMessage ({display, text}) {
  
  return (
    <p className={display ? "message isDisplayed" : "message isHidden"}>{text}</p>
  )
}

ErrorMessage.propTypes = {
  display: PropTypes.bool,
  text: PropTypes.string
}
  
export default ErrorMessage