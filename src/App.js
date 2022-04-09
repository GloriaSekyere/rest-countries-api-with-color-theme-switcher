import { useMode } from './hooks/useMode';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

//components
import Header from './components/Header'
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Country from './pages/country/Country';
import BackToTop from './components/BackToTop';

//styles
import './App.css'


function App() {
  const { mode } = useMode()
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)

  const handleBackToTop = () => {
    if (window.scrollY >= 1000){
      setIsBackToTopVisible(true)
    } else {
      setIsBackToTopVisible(false)
    }
  }

  window.addEventListener('scroll', handleBackToTop)

  return (
    <div className={`App ${mode}`}>
      <Header />

      <BrowserRouter basename="/rest-countries-api-with-color-theme-switcher">
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

      {isBackToTopVisible && <BackToTop />}
    </div>
  );
}

export default App;
