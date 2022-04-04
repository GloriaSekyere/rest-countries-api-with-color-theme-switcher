import { useMode } from '../hooks/useMode';

//assets 
import ArrowLight from '../assets/arrow_top_light.svg';
import ArrowDark from '../assets/arrow_top_dark.svg';

//styles
import styles from './BackToTop.module.css';

function BackToTop() {
  const { mode } = useMode()

  return (
    <div 
      className={styles['to-top']}
      onClick={() => window.scrollTo(0,0)}
    >
      <img
        className={styles['to-top-arrow']}
        src={mode === 'light' ? ArrowLight : ArrowDark} 
        alt="back-to-top"
      />
    </div>
  )
}

export default BackToTop;