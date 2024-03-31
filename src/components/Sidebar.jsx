import arrow from '../images/arrow.png'
import logo from '../images/logo.png'

const SideBar = () => {
  const path = window.location.pathname
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
            {/* Added our CustomLinks */}
            <li className="nav-links">
              {/* Add link to main here */}
              <a href="/main">
                <i className='bx bx-home-alt sidebar-icons'></i>
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li className="nav-links">
              {/* Add link to form here */}
              <a href="/form"> 
                <i className='bx bx-book-add sidebar-icons' ></i>
                <span className="nav-text">Add New Product</span>
                </a>
            </li>
            <li className="nav-links">
              {/* Add link to table here */}
              <a href="/table">
                <i className='bx bx-bar-chart-alt-2 sidebar-icons'></i>
                <span className="nav-text">Inventory</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <ul className="menu-links">
          <li className="nav-links">
            <a href="#">
              <i className='bx bx-log-out sidebar-icons'></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>

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

function CustomLink({href, children, ...props}) {
  return (
    <li>
      {/* Add link to main here */}
      <a href={href}>{children}</a>
    </li>
  )
}

export default SideBar;