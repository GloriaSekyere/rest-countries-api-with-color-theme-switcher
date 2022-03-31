import { useMode } from '../hooks/useMode'

// assets
import LightMode from '../assets/lightMode.svg'

//styles
import './Header.css';


function Header() {
  const { toggleMode } = useMode()

  return (
    <div className='header'>
      <h1>Where in the world?</h1>
      <div className='mode-selector' onClick={() => toggleMode()}>
        <img src={LightMode} alt="light-mode-icon" />
        <span>Dark Mode</span>
      </div>
    </div>
  )
}

export default Header