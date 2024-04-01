import arrow from '../images/arrow.png'
import logo from '../images/logo.png'
import '../../src/Sidebar.css'

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSquarePlus, faTable } from '@fortawesome/free-solid-svg-icons'
/*
Import the link component from react-dom to disallow refreshing page:
  -replace all <a> with <Link>
  -replace all 'href's with 'to'
  End Result: <Link to=""></Link>

Import useMatch and useResolvedPath
  -useMatch: match current location to a route to access it's info
  -useResolvedPath: It helps you resolve relative paths to their actual paths within your application. This can be useful for generating links dynamically or navigating to specific routes.
*/
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav className="sidebar close">
      <header>
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <div className="sidebar__text">
            <span className="side-bar__name nav-text">Clover Stock</span>
            <span className="sidebar__profession nav-text">Web Developer</span>
          </div>
        </div>
        <img src={arrow} alt="arrow" className="toggle" />
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            {/* Added our CustomLinks to navigate pages*/}
            <CustomLink to="/">
              <FontAwesomeIcon icon={faHouse} className="sidebar-icons"/>
              <span className="nav-text">Home</span>
            </CustomLink>
            
            <CustomLink to="/form">
              <FontAwesomeIcon icon={faSquarePlus} className="sidebar-icons"/>
              <span className="nav-text">Add New Product</span>
            </CustomLink>

            <CustomLink to="/table">
              <FontAwesomeIcon icon={faTable} className="sidebar-icons"/>
              <span className="nav-text">Inventory Table</span>
            </CustomLink>
          </ul>
        </div>

        <div className="bottom-content">
          <ul className="menu-links">
            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon sidebar-icons moon"></i>
                <i className="bx bx-sun sidebar-icons sun"></i>
              </div>
              <span className="mode-text text">Dark Mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
//Replace all href with 'to' for Routing
//Use resolvedPath to reference links, in this case on the to's
function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true}) //use end:true to get exact matching
  return (
    <li className={`${isActive ? "active" : ""}` + " nav-links"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default SideBar;