import { useHistory } from 'react-router-dom';
import { useMode } from '../hooks/useMode';

//assets 
import LightArrow from '../assets/arrow_light.svg';
import DarkArrow from '../assets/arrow_dark.svg';

//styles
import './BackToHome.css';

function BackToHome() {
  const { mode } = useMode()
  const history = useHistory()

  return (
    <div className='back' onClick={() => history.push("/")}>
      <img 
        src={mode === 'light' ? LightArrow : DarkArrow}
        alt='back-icon'
      />
      <span>Back</span>
    </div>
  )
}

export default BackToHome