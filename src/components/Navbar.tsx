import { Link } from 'react-router-dom'
import NetlightLogo from '../assets/netlight-logo.svg'
import SysteconLogo from '../assets/systecon-logo.svg'
import './Navbar.css'

const Navbar = (): JSX.Element => {
  return (
    <div className="navbar-container">
      <div className="icons-container">
        <img src={SysteconLogo} />
        <img src={NetlightLogo} />
      </div>
      <div className="links-container">
        <Link to="/" className="nav-link">
          <p>Home</p>
        </Link>
        <Link to="/second" className="nav-link">
          <p>Second</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
