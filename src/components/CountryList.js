import './CountryList.css';

function CountryList({ countries }) {
  return (
    <div>
      {countries.map(country => (
        <div key={country.alpha3Code}>
          {country.name}
        </div>
      ))}
    </div>
  )
}

export default CountryList;