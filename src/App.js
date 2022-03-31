import { useMode } from './hooks/useMode';

//components
import Header from './components/Header'
import CountryList from './components/CountryList';

function App() {
  const { mode } = useMode()

  return (
    <div className={`App ${mode}`}>
      <Header />
      <CountryList />
    </div>
  );
}

export default App;
