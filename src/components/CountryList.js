import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

//styles
import styles from './CountryList.module.css';

function CountryList({ countries }) {
  const history = useHistory()
  const [showValue, setShowValue] = useState(50);
  const [isVisible, setIsVisible] = useState(true)

  const handleCountryClick = (code) => {
    history.push(`/country/${code.toLowerCase()}`)
  }

  useEffect(() => {
    if (showValue >= countries.length) {
      setIsVisible(false)
    }
  }, [showValue])

  const handleShowMore = () => {
    setShowValue(prevValue => prevValue +  50)
  }

  return (
    <>
      {countries.slice(0, showValue).map(country => (
        <div 
          key={country.cca3} 
          className={styles['country-card']}
          onClick={() => handleCountryClick(country.cca3)}
        >
          <div className={styles['country-flag']}>
            <img src={country.flags.svg} alt={country.name.common} />
          </div>
          <div className={styles['country-info']}>
            <h2 className={styles['country-name']}>{country.name.common}</h2>
            <ul className={styles['country-info-list']}>
              <li className={styles['country-info-list-item']}><span>Population:</span> {country.population}</li>
              <li className={styles['country-info-list-item']}><span>Region:</span> {country.region}</li>
              <li className={styles['country-info-list-item']}><span>Capital:</span> {country.capital}</li>
            </ul>
          </div>
        </div>
      ))}

      {isVisible && (<div className={styles['show-button-div']}>
        <button 
          className={styles['show-button']}
          onClick={handleShowMore}
        >Show more</button>
      </div>)}
    </>
  )
}

export default CountryList;