// Component
import Button from '../../components/Button'

// Style
import './style.scss'


function TransactionCard ({title, amount, desc}) {
  
  return (
    <section className="account">
      <div className="account_content-wrapper">
        <h3 className="account_title">{title}</h3>
        <p className="account_amount">{amount}</p>
        <p className="account-amount_description">{desc}</p>
      </div>
      <div className="account_content-wrapper account_content-wrapper_cta">
        <Button styleName="button button_transaction" path="" text="View transactions"/>
      </div>
    </section>
  )
}
  
export default TransactionCard