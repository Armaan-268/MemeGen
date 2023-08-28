import { useState } from 'react'
import logo from "../assets/logo.png"

function Header() {
    const [count, setCount] = useState(0)
  
    return (
       <nav className='nav'>
            <img src={logo}  className="logo"/>
            <h1 className='heading'>Meme Generator</h1>
            <div className='name'>
                <p>Armaan</p>
                <p>Chauhan</p>
            </div>
        </nav>
      
    )
  }
  
  export default Header