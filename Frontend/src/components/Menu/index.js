// Components
import Tab from '../../components/Tab'

// Style
import './style.scss'


function Menu ({user}) {
  
  return (
    <div>
      {user==="" && <Tab path="/sign-in" iconClass="icon fa fa-user-circle" text="Sign In"/>}

      {user!=="" && 
        <div className="tab-container">
          <Tab path="/user" iconClass="icon fa fa-user-circle" text={user}/>
          <Tab path="/" iconClass="icon fa fa-sign-out" text="Sign Out"/>
        </div>
      }
    </div>
  )
}
  
export default Menu