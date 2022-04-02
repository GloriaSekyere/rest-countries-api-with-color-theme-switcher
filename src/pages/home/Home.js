import CountryList from '../../components/CountryList';
import Searchbar from '../../components/Searchbar';
import { useFetch } from '../../hooks/useFetch';

//styles
import styles from './Home.module.css';

function Home() {
  const { data: countries, isPending, error } = useFetch("https://restcountries.com/v2/all")

  return (
    <>
      <Searchbar />
      
      <div className={styles.home}>
        {isPending && <p>Loading countries...</p>}
        {error && <p>Uh oh, could not load countries...</p>}
        {countries && <CountryList countries={countries} />}
      </div>
    </>
  )
}

export default Home