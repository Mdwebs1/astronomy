import './App.css';
import './Navbar.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { SidebarData } from './SidebarData';


function Nav() {
  const [sidebar,setSidebar] = useState(false)

  const showSidebar =()=>setSidebar(!sidebar)
  return (
    <>
    <nav>
    <Link to="/">
   <h1>Logo</h1>
   </Link>
   <ul className="nav-links">
   <Link to="/home">
       <li>Home</li>
       </Link>
       <Link to="/about">
       <li>About</li>
       </Link>
       {/* <Link to="/contact">
       <li>Contact</li>
       </Link> */}
   </ul>
   <Link to="#" className="menu-bars">
   <FaIcons.FaBars onClick={showSidebar}/>
   </Link>
   
    </nav>
    <div className={sidebar? 'nav-menu active' :'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
        <Link to="#" className="menu-bars">
          <AiIcons.AiOutlineCloseSquare/>
        </Link>
        </li>
        {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        
    </div>
  
    </>
  );
}

export default Nav;
