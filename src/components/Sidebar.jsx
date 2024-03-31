import arrow from '../images/arrow.png'
import logo from '../images/logo.png'

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
            <CustomLink href="/main">
              <i className='bx bx-home-alt sidebar-icons'></i>
              <span className="nav-text">Home</span>
            </CustomLink>
            
            <CustomLink href="/form">
              <i className='bx bx-book-add sidebar-icons' ></i>
              <span className="nav-text">Add New Product</span>
            </CustomLink>

            <CustomLink href="/table">
              <i className='bx bx-bar-chart-alt-2 sidebar-icons'></i>
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

function CustomLink({href, children, ...props}) {
  const path = window.location.pathname
  return (
    <li className={`${path === href ? "active" : ""}` + " nav-links"}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}

export default SideBar;