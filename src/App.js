import Header from './components/Header'
import { ModeProvider } from './context/ModeContext';

function App() {
  return (
    <ModeProvider>
      <div className="App">
        <Header />
      </div>
    </ModeProvider>
  );
}

export default App;
