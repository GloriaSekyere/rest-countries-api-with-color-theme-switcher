import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

//components
import BackToHome from '../../components/BackToHome';
import CountryList from '../../components/CountryList';

//styles
import styles from './Search.module.css';


function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = `https://restcountries.com/v3.1/name/${query}`;
  const {data:countries, isPending, error} = useFetch(url)

  return (
    <div className={styles.search}>
      <BackToHome />

      {isPending && <p className='pending'>Loading countries...</p>}
      {error && <p className={styles.resultsText}>No results found for "{query}"</p>}

      {countries && (
        <>
          <p className={styles.resultsText}>Showing results for "{query}"</p>
          <CountryList countries={countries} />
        </>
      )} 
    </div>
  )
}

export default Search;