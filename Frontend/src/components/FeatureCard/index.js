// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function FeatureCard ({img, title, text}) {
  
  return (
    <div className="feature_item">
      <img src={img} alt="Chat Icon" className="feature_icon" />
      <h3 className="feature_item_title">{title}</h3>
      <p className="feature_item_text">{text}</p>
    </div>
  )
}

FeatureCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}
  
export default FeatureCard