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

  const handleSearch = (e) => {
    e.preventDefault()
    if (search) {
      history.push(`/search?q=${search}`)
      setSearch('')
    }
  }

  return (
    <form 
      className={styles.search}
      onSubmit={handleSearch}
    >
      <label>
        <button
          className={styles['search-icon']}
          onClick={handleSearch}
        >
          <img
            src={mode === 'light' ? SearchLight : SearchDark}
            alt="search-icon" 
          />
        </button>
        <input
          className={styles['search-input']}
          type='text'
          value={search}
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}

export default Searchbar