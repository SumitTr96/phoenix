import {Link,NavLink} from 'react-router-dom'
import './navBar.css'
import { useState } from 'react'
import { links } from '../data.js'
import { FaBars } from "react-icons/fa6";



const Navbar = () =>
  { 
    const [navShow,setNavShow] = useState(false);

    return(
      <nav>
        <div className="container nav_container">
          <Link to="/" className="logo" onClick={() => setNavShow(false)}>
          <h2>PHOENIX</h2>
          </Link>
          <ul className= {`nav_menu ${navShow ? 'show_nav':'hide_nav'}`}>
            {
              links.map(({name,path}, index) => {
                return(
                  <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active_nav':''} onClick = {()=>setNavShow(prev => !prev)}>
                      {name}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
          <button className='nav_btn' onClick = {()=>setNavShow(prev => !prev)}> <FaBars /> </button>
        </div>
      </nav>
    )
  }
export default Navbar;