import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

import './App.css';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
