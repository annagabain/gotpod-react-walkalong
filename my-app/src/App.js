import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState'


function App() {
  return (
    <div className="App">
      {/* <h1>It works!</h1> */}
      <p>StatefulGreetingWithPrevState: </p><StatefulGreetingWithPrevState/>
      <hr/>
      <p>StatefulGreetingWithCallback:</p> <StatefulGreetingWithCallback />
      <hr />
      <p>stateful greeting with props</p><StatefulGreeting greeting="I am a stateful class component!" name="Anna" />
      <hr />
      <p>used once: functional greeting<FunctionalGreeting /></p>
      <hr />
      <p>used twice: functional greeting<FunctionalGreeting /></p>
      <hr />
      <p>functional greeting with props</p><FunctionalGreetingWithProps greeting="Nice to meet you!" name="Anna" age="36" />
    </div>
  );
}

export default App;
