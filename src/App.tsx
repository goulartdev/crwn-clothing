import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
