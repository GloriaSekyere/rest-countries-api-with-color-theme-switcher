import { useState } from 'react';

//styles
import styles from './Filter.module.css';


function Filter({ setUrl }) {

  const handleRegion = (e) => {
    setUrl(`https://restcountries.com/v2/continent/${e.target.value}`)
  }

  return (
    <label className={styles.filter}>
      <select 
        className={styles['filter-select']}
        onChange={e => handleRegion(e)}
      >
        <option value=''>Filter By Region</option>
        <option value='africa'>Africa</option>
        <option value='americas'>Americas</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </label>
  )
}

export default Filter