import CountryList from '../../components/CountryList';
import { useFetch } from '../../hooks/useFetch';

//styles
import './Home.css';

function Home() {
  const { data: countries, isPending, error } = useFetch("https://restcountries.com/v2/all")

  return (
    <div className='home'>
      {isPending && <p>Loading countries...</p>}
      {error && <p>Uh oh, could not load countries...</p>}
      {countries && <CountryList countries={countries} />}
    </div>
  )
}

export default Home