// Component
import Button from '../../components/Button'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function TransactionCard ({title, amount, desc}) {
  
  return (
    <section className="account">
      <div className="account_content-wrapper">
        <h3 className="account_title">{title}</h3>
        <p className="account_amount">{amount}</p>
        <p className="account_amount-description">{desc}</p>
      </div>
      <div className="account_content-wrapper account_content-wrapper_cta">
        <Button styleName="button button_transaction" action={null} text="View transactions"/>
      </div>
    </section>
  )
}

TransactionCard.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  desc: PropTypes.string
}
  
export default TransactionCard