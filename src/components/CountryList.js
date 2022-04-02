import './CountryList.css';

function CountryList({ countries }) {
  return (
    <div>
      {countries.map(country => (
        <div key={country.alpha3Code} className="country-card">
          <div className='country-flag'>
            <img src={country.flag} alt={country.name} />
          </div>
          <div className='country-info'>
            <h2 className='country-name'>{country.name}</h2>
            <ul className='country-info-list'>
              <li className='country-info-list-item'><span>Population:</span> {country.population}</li>
              <li className='country-info-list-item'><span>Region:</span> {country.region}</li>
              <li className='country-info-list-item'><span>Capital:</span> {country.capital}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CountryList;