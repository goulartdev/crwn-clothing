import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

import './App.css';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
