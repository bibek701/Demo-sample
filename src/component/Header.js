import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }

  return (

    <header className="bg-black text-white flex justify-between px-5 py-2 items-baseline">

      <div>

        <NavLink to='/'> <h1>Sample Logo</h1> </NavLink>

        {show && <nav className="sm:flex sm:flex-col space-y-1 mt-3 hidden">
          <NavLink to='/about-us'>About</NavLink>
          <NavLink to='/contact-us'>Contact</NavLink>
        </nav>
        }

      </div>


      {show ? <button onClick={toggle} className="hidden sm:flex"><i class="fa-solid fa-xmark fa-lg"></i> </button> :

        <button onClick={toggle} className="hidden sm:flex"><i className="fa-solid fa-bars fa-lg"></i></button>}

      <nav className="space-x-5 flex sm:hidden">
        <NavLink to='/about-us'>About</NavLink>
        <NavLink to='/contact-us'>Contact</NavLink>
      </nav>
    </header >
  )
}
export default Header