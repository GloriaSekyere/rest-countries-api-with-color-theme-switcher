import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';


//styles
import './Country.css';

function Country() {
  const { name } = useParams()
  const url = "";
  const { data:country, isPending, error } = useFetch(url)

  return (
    <div>
      {isPending && <p>Loading country...</p>}
      {error && <p>Uh oh, could not load country...</p>}
      {country && (
        <div>
          {country.name}
        </div>
      )}
    </div>
  )
}

export default Country;