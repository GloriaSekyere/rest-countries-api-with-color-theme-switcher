import { useMode } from '../hooks/useMode'

// assets
import LightMode from '../assets/lightMode.svg'
import DarkMode from '../assets/darkMode.svg'

//styles
import './Header.css';


function Header() {
  const { mode, toggleMode } = useMode()

  return (
    <div className='header'>
      <h1>Where in the world?</h1>
      <div className='mode-selector' onClick={() => toggleMode()}>
        {mode === 'light' ? (
            <>
              <img src={LightMode} alt="light-mode-icon" />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <img src={DarkMode} alt="dark-mode-icon" />
              <span>Light Mode</span>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Header