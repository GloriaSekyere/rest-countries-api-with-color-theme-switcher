import { Link } from 'react-router-dom';
import { useMode } from '../hooks/useMode';

//assets 
import LightArrow from '../assets/arrow_light.svg';
import DarkArrow from '../assets/arrow_dark.svg';

//styles
import styles from './BackToHome.module.css';

function BackToHome() {
  const { mode } = useMode()

  return (
    <Link className={styles.back} to="/">
      <img 
        src={mode === 'light' ? LightArrow : DarkArrow}
        alt='back-icon'
      />
      <span>Back</span>
    </Link>
  )
}

export default BackToHome