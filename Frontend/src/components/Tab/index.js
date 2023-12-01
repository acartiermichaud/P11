// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Tab ({action, iconClass, text}) {
  
  return (
    <button className="main-nav-item" onClick={action}>
      <i className={iconClass}></i>
      {text}
    </button>
  )
}

Tab.propTypes = {
  action: PropTypes.func,
  iconClass: PropTypes.string,
  text: PropTypes.string
}
  
export default Tab