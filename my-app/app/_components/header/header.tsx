import Logo from './logo'
import MenuIcon from './menuIcon'

const Header = () => {
  return (
    <header>
        <div className="flex justify-between items-center">
            <Logo />
            <MenuIcon />
        </div>

    </header>
  )
}

export default Header
