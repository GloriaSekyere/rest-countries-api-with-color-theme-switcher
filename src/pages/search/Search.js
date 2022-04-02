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

  const url = `https://restcountries.com/v2/name/${query}`;
  const {data:countries, isPending, error} = useFetch(url)

  return (
    <div className={styles.search}>
      <BackToHome />

      {isPending && <p>Loading countries...</p>}
      {error && <p>Uh oh, could not load countries...</p>}

      {countries && <CountryList countries={countries} />}
    </div>
  )
}

export default Search;