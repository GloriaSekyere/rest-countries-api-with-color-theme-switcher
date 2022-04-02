import { useMode } from '../hooks/useMode';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//assets 
import SearchLight from '../assets/search_light.svg';
import SearchDark from '../assets/search_dark.svg';

//styles
import styles from './Searchbar.module.css';


function Searchbar() {
  const { mode } = useMode()
  const [search, setSearch] = useState('')
  const history = useHistory()

  const handleSearch = () => {
    history.push(`/search/q=${search}`)
  }

  return (
    <label className={styles.search}>
      <div 
        className={styles['search-icon']}
        onClick={handleSearch}
      >
        <img
          src={mode === 'light' ? SearchLight : SearchDark}
          alt="search-icon" 
        />
      </div>
      <input
        className={styles['search-input']}
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
  )
}

export default Searchbar