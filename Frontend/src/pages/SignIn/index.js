// Components
import Header from '../../components/Header'
import Form from '../../components/Form'

// Style
import './style.scss'


function SignIn () {
  
  return (
    <div>
      <Header user=""/>

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </div>
  )
}
  
export default SignIn