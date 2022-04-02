import { useFetch } from '../../hooks/useFetch';

//components
import CountryList from '../../components/CountryList';
import Filter from '../../components/Filter';
import Searchbar from '../../components/Searchbar';

//styles
import styles from './Home.module.css';

function Home() {
  const { data: countries, isPending, error } = useFetch("https://restcountries.com/v2/all")

  return (
    <>
      <Searchbar />
      <Filter />
      
      <div className={styles.home}>
        {isPending && <p>Loading countries...</p>}
        {error && <p>Uh oh, could not load countries...</p>}
        {countries && <CountryList countries={countries} />}
      </div>
    </>
  )
}

export default Home