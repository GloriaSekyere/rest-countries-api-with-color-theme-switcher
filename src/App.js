import { useMode } from './hooks/useMode';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Header from './components/Header'
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Country from './pages/country/Country';

//styles
//import styles from './App.module.css';
import './App.css'

function App() {
  const { mode } = useMode()

  return (
    <div className={`App ${mode}`}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/country/:code">
            <Country />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
