//styles
import styles from './Filter.module.css';

function Filter({ handleFilter, fields }) {

  return (
    <label className={styles.filter}>
      <select 
        aria-label="Filter"
        className={styles['filter-select']}
        onChange={e => handleFilter(
          `https://restcountries.com/v3.1/region/${e.target.value}${fields}`
        )}
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

export default Filter;