// Component
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FeatureCard from '../../components/FeatureCard'

// Style
import './style.scss'

// Images
import iconChat from '../../images/icon-chat.png'
import iconMoney from '../../images/icon-money.png'
import iconSecurity from '../../images/icon-security.png'


function Home () {
  
  return (
    <div>
      <Header user=""/>
      <main>
        <Banner/>

        <section className="features">
          <h2 className="sr-only">Features</h2>

          <FeatureCard 
            img={iconChat}
            title="You are our #1 priority" 
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." 
          />

          <FeatureCard 
            img={iconMoney}
            title="More savings means higher rates" 
            text="The more you save with us, the higher your interest rate will be!" 
          />

          <FeatureCard 
            img={iconSecurity}
            title="Security you can trust" 
            text="We use top of the line encryption to make sure your data and money is always safe." 
          />
        </section>
      </main>
    </div>
  )
}
  
export default Home