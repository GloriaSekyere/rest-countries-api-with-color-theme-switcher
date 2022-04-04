import { useMode } from '../hooks/useMode'
import { useState } from 'react';

// assets
import LightMode from '../assets/lightMode.svg'
import DarkMode from '../assets/darkMode.svg'

//styles
import styles from './Header.module.css';


function Header() {
  const { mode, toggleMode } = useMode()
  const [isScrolling, setIsScrolling] = useState(false)
  
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <div 
      className={
        isScrolling ?  `${styles['header']} ${styles['scroll']}` : styles['header']
      }
    >
      <h1>Where in the world?</h1>
      <div className={styles['mode-selector']} onClick={() => toggleMode()}>
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