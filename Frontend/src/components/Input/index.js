// Style
import './style.scss'


function Input ({title, type, label}) {
  
  return (
    <div className={type==="text" ? "input-wrapper" : "input-remember"}>
      {type==="checkbox" && <input type={type} id={label} />}
      <label className={type==="text" ? "input-wrapper_label": "input-remember_label"} htmlFor={label}>{title}</label>
      {type==="text" && <input className="input-wrapper_field" type={type} id={label} />}
    </div> 
  )
}
  
export default Input