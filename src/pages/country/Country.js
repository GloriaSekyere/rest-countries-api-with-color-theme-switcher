import { useFetch } from '../../hooks/useFetch';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

//components
import BackToHome from '../../components/BackToHome';

//styles
import styles from './Country.module.css';

function Country() {
  const { code } = useParams()
  const url = `https://restcountries.com/v2/alpha/${code}`;
  const { data:country, isPending, error } = useFetch(url)
  const [borders, setBorders] = useState(null)
  
  const history = useHistory()

  useEffect(() => {
    if (country && country.borders) {
      //fetch border countries and use their fullnames in buttons
      let bordersUrl = "https://restcountries.com/v2/alpha?codes=";
      const codes = country.borders.map(code => code.toLowerCase())
      codes.forEach(code => {
        bordersUrl += `${code},`
      })

      fetch(bordersUrl)
          .then(response => response.json())
          .then(data => setBorders(data))
          .catch(err => console.log(err.message))
    }
  }, [country])

  const handleBorderClick = (border) => {
    setBorders([])
    history.push(`/country/${border}`)
  }

  return (
    <div className={styles.country}>
      <BackToHome />

      {isPending && <p className='pending'>Loading country...</p>}
      {error && <p className='error'>Uh oh, could not load country...</p>}

      {country && (
        <div className={styles['country-detail']}>
          <div className={styles['country-detail-flag']}>
            <img 
              src={country.flag}
              alt={`flag of ${country.name}`}
            />
          </div>

          <div className={styles['country-detail-info']}>
            <h2>{country.name}</h2>

            <ul className={styles['country-info-list']}>
              <li className={styles['country-info-list-item']}><span>Native Name: </span>{country.nativeName}</li>
              <li className={styles['country-info-list-item']}><span>Population: </span>{country.population}</li>
              <li className={styles['country-info-list-item']}><span>Region: </span>{country.region}</li>
              <li className={styles['country-info-list-item']}><span>Sub Region: </span>{country.subregion}</li>
              <li className={styles['country-info-list-item']}><span>Capital: </span>{country.capital}</li>
            </ul>

            <ul className={styles['country-info-list']}>
              <li className={styles['country-info-list-item']}><span>Top Level Domain: </span>{country.topLevelDomain}</li>
              <li className={styles['country-info-list-item']}><span>Currencies: </span>{country.currencies && country.currencies.map(cur => cur.name)}</li>
              <li className={styles['country-info-list-item']}><span>Languages: </span>{country.languages && country.languages.map(lang => lang.name)}</li>
            </ul>         
          </div>
        </div>
      )}

      <div className={styles['border-countries']}>
        {borders && <h3>Border Countries</h3>}
        <div className={styles['borders']}>
          {borders && borders.map(border => (
            <button 
              key={border.alpha3Code}
              className={styles.border}
              onClick={() => handleBorderClick(border.alpha3Code)}
            >{border.name}</button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Country;