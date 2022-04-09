import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';

//components
import CountryList from '../../components/CountryList';
import Filter from '../../components/Filter';
import Searchbar from '../../components/Searchbar';

//styles
import styles from './Home.module.css';


function Home() {
  const fields = "?fields=name,population,region,capital,flags,cca3";
  const [url, setUrl] = useState(`https://restcountries.com/v3.1/all${fields}`);
  const { data: countries, isPending, error } = useFetch(url);
  
  const handleFilter = (filterUrl) => {
    setUrl(filterUrl)
  }

  return (
    <div className={styles.home}>
      <div className={styles.inputs}>
        <div className={styles.searchDiv}>
          <Searchbar />
        </div>
        <div className={styles.filterDiv}>
          <Filter 
            handleFilter={handleFilter}
            fields={fields}
          />
        </div>
      </div>
      
      {isPending && <p className='pending'>Loading countries...</p>}
      {error && <p className='error'>Uh oh, could not load countries...</p>}

      <div className={styles.countryList}>
        {countries && <CountryList countries={countries} />}
      </div>
    </div>
  )
}

export default Home;