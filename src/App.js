import './App.css';
import GlobeComponent from './components/globe/Globe';
import LoginStepper from './components/LoginStepper/LoginStepper';

function App() {
  
  return (
    <div className="App">
      <LoginStepper />
      <GlobeComponent/>
    </div>
  );
}

export default App;
