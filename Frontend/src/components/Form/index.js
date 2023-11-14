// Component
import Input from '../../components/Input'
import Button from '../../components/Button'

// Style
import './style.scss'


function Form () {
  
  return (
    <form>
      <Input title="Username" type="text" label="username"/>
      <Input title="Password" type="text" label="password"/>

      <Input title="Remember me" type="checkbox" label="remember-me"/>
      
      <Button styleName="button button_sign-in" path='/user' text="Sign In"/>
    </form>
  )
}
  
export default Form