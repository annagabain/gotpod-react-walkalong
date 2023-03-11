import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';


function App() {
  return (
    <div className="App">
      {/* <h1>It works!</h1> */}
      <p>used once: functional greeting<FunctionalGreeting /></p>
      <p>used twice: functional greeting<FunctionalGreeting /></p>
      <p>functional greeting with props</p><FunctionalGreetingWithProps greeting="Nice to meet you!" name="Anna" age="36"/>
    </div>
  );
}

export default App;
