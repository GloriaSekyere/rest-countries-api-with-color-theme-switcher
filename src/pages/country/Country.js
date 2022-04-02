import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

//components
import BackToHome from '../../components/BackToHome';

//styles
import styles from './Country.module.css';

function Country() {
  const { name } = useParams()
  const url = `https://restcountries.com/v2/name/${name}?fullText=true`;
  const { data:country, isPending, error } = useFetch(url)

  useEffect(() => {
    if (country) {
      console.log(country)
    }
  }, [country])

  return (
    <div className={styles.country}>
      <BackToHome />
      {isPending && <p>Loading country...</p>}
      {error && <p>Uh oh, could not load country...</p>}
      {country && (
        <div className={styles['country-detail']}>
          <div className={styles['country-detail-flag']}>
            <img 
              src={country[0].flag}
              alt={`flag of ${country[0].name}`}
            />
          </div>

          <div className={styles['country-detail-info']}>
            <h2>{country[0].name}</h2>

            <ul className={styles['country-info-list']}>
              <li className={styles['country-info-list-item']}><span>Native Name: </span>{country[0].nativeName}</li>
              <li className={styles['country-info-list-item']}><span>Population: </span>{country[0].population}</li>
              <li className={styles['country-info-list-item']}><span>Region: </span>{country[0].region}</li>
              <li className={styles['country-info-list-item']}><span>Sub Region: </span>{country[0].subregion}</li>
              <li className={styles['country-info-list-item']}><span>Capital: </span>{country[0].capital}</li>
            </ul>

            <ul className={styles['country-info-list']}>
              <li className={styles['country-info-list-item']}><span>Top Level Domain: </span>{country[0].topLevelDomain}</li>
              <li className={styles['country-info-list-item']}><span>Currencies: </span>{country[0].currencies.map(cur => cur.name)}</li>
              <li className={styles['country-info-list-item']}><span>Languages: </span>{country[0].languages.map(lang => lang.name)}</li>
            </ul>

            <div className='border-countries'>
              <h3>Border Countries</h3>
              {country[0].borders.map(border => (
                <div>{border}</div>
              ))}
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default Country;