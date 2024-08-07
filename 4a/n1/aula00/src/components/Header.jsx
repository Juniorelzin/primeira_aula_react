import './Header.css'
import { Raccoon } from './icons/Raccoon'

function Header() {
    const iconBig = {
      width: '148px',
      height: '148px'
    };
  return (
    <div className="header-container">
        <h1>Página bonita</h1>
        <Raccoon style={iconBig}/>
    </div>

  )
}

export default Header
