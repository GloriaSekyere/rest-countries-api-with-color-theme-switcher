import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


//styles
import './Country.css';

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
    <div>
      {isPending && <p>Loading country...</p>}
      {error && <p>Uh oh, could not load country...</p>}
      {country && (
        <div>
          <img src={country[0].flag} />
        </div>
      )}
    </div>
  )
}

export default Country;