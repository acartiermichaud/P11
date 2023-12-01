// React
import { useNavigate } from 'react-router-dom'

// Components
import Header from '../../components/Header'
import Button from '../../components/Button'

// Style
import './style.scss'


function Error () {

  const navigate = useNavigate()

  function backHome(e) {
    e.preventDefault()
    navigate("/")
  }
  
  return (
    <div>
      <Header/>
      <main>
        <section className="error-page">
          <h1 className="error-page_title">404</h1>
          <h2 className="sr-only">Error</h2>
          <p className='error-page_text'>Page not Found.</p>
          <Button styleName="button button_error" action={(e) => backHome(e)} text="Back to the homepage"/>
        </section>
      </main>
    </div>
  )
}
  
export default Error