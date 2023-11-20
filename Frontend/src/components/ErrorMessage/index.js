// Style
import './style.scss'


function ErrorMessage ({display, text}) {
  
  return (
    <p className={display ? "message message_display" : "message message_hidden"}>
      {text}
    </p>
  )
}
  
export default ErrorMessage