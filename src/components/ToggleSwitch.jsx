import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

export default function ToggleSwitch () {
  return (
    <div className="bottom-content">
      <ul className="menu-links">
        <li className="mode">
          <div className="moon-sun">
            <FontAwesomeIcon icon={faMoon} className="sidebar-icons moon"/>
            <FontAwesomeIcon icon={faSun} className="sidebar-icons"/>
          </div>
            <span className="mode-text text">Dark Mode</span>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
        </li>
      </ul>
    </div>
  )
}