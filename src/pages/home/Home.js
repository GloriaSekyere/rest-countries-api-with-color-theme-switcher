import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';

//components
import CountryList from '../../components/CountryList';
import Filter from '../../components/Filter';
import Searchbar from '../../components/Searchbar';

//styles
import styles from './Home.module.css';


function Home() {
  const [url, setUrl] = useState("https://restcountries.com/v2/all")
  const { data: countries, isPending, error } = useFetch(url)

  return (
    <>
      <Searchbar />
      {/* <Filter setUrl={setUrl} /> */}
      
      <div className={styles.home}>
        {isPending && <p>Loading countries...</p>}
        {error && <p>Uh oh, could not load countries...</p>}
        {countries && <CountryList countries={countries} />}
      </div>
    </>
  )
}

export default Home