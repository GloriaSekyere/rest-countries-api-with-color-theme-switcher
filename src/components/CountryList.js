import { useHistory } from 'react-router-dom';

//styles
import styles from './CountryList.module.css';

function CountryList({ countries }) {
  const history = useHistory()

  const handleClick = (code) => {
    history.push(`/country/${code.toLowerCase()}`)
  }
  return (
    <>
      {countries.map(country => (
        <div 
          key={country.alpha3Code} 
          className={styles['country-card']}
          onClick={() => handleClick(country.alpha3Code)}
        >
          <div className={styles['country-flag']}>
            <img src={country.flag} alt={country.name} />
          </div>
          <div className={styles['country-info']}>
            <h2 className={styles['country-name']}>{country.name}</h2>
            <ul className={styles['country-info-list']}>
              <li className={styles['country-info-list-item']}><span>Population:</span> {country.population}</li>
              <li className={styles['country-info-list-item']}><span>Region:</span> {country.region}</li>
              <li className={styles['country-info-list-item']}><span>Capital:</span> {country.capital}</li>
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default CountryList;