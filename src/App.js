import { useMode } from './hooks/useMode';

//styles 
import Header from './components/Header'

function App() {
  const { mode } = useMode()

  return (
    <div className={`App ${mode}`}>
      <Header />
    </div>
  );
}

export default App;
