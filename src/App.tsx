import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { User } from './model';

import { Authentication, HomePage, ShopPage } from './pages';
import Header from './components/header/header';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  useEffect(() => {
    return auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          const data = snapShot.data();

          setCurrentUser(
            data ? {
              id: snapShot.id,
              name: data.name,
              email: data.email,
              createdAt: data.createdAt
            } : undefined
          );
        });

      } else {
        setCurrentUser(undefined);
      }
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
