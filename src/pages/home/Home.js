import { useFetch } from '../../hooks/useFetch';

//styles
import './Home.css';

function Home() {
  const { data: countries, isPending, error } = useFetch("https://restcountries.com/v2/all")

  if (countries) {
    console.log(countries)
  }

  return (
    <div>
      {countries && countries.map(country => (
        <div key={country.alpha3Code}>
          {country.name}
        </div>
      ))}
    </div>
  )
}

export default Home