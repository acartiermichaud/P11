// Components
import Header from '../../components/Header'
import Button from '../../components/Button'

// Style
import './style.scss'


function Error () {
  
  return (
    <div>
      <Header user=""/>
      <main>
        <section className="error-page">
          <h1 className="error-page_title">404</h1>
          <h2 className="sr-only">Error</h2>
          <p className='error-page_text'>Page not Found.</p>

          <Button styleName="button button_error" path="/" text="Back to the homepage"/>
        </section>
      </main>
    </div>
  )
}
  
export default Error