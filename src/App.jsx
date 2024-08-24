import { useState } from 'react'
import './App.css'

function Login(){
  const [show,setShow]=useState(false);
  
return(
<div className={`head ${show?"active":" "}`}>
  <div className="hd" onClick={()=>{setShow(!show)}}>{show?"USER AUTHENTICATION":"CLICK TO LOGIN "}</div>
  
  <div className="b">
    <label htmlFor="fname">USERNAME : </label>
    <input type="text" />
    <label htmlFor="pass">PASSWORD : </label>
    <input type="text" id='pass'/>
    <button >LOGIN</button>
  
</div>
</div>
);
}
function App() {
  return (
    <>
    <Login />
    </>
  )
}

export default App
