import Logo from './logo'

const Header = () => {
  return (
    <header>
        <div className="flex justify-between items-center">
            <Logo />
            <span>Menu icon</span>
        </div>

    </header>
  )
}

export default Header
