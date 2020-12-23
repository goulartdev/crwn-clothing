import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import { Authentication, HomePage, ShopPage } from './pages';
import Header from './components/header/header';

import './App.css';
import { User } from './model';

function App() {
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setCurrentUser(
        user ? { 
          name: user.displayName || '', 
          email: user.email ||'' 
        } : undefined
      );
    });
  });

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
