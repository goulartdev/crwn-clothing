import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/auth/auth.actions';

import { Authentication, HomePage, ShopPage } from './pages';
import Header from './components/header/header';

import './App.css';
import { RootState } from './redux/root-reducer';

function App() {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) return;
    
    return auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot(snapShot => {
          const data = snapShot.data();
          
          if (data) {
            const user = { 
              id: snapShot.id, 
              name: data.name,
              email: data.email,
              createdAt: data.createdAt
            }

            dispatch(setCurrentUser(user));
          }
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });
  }, [currentUser, dispatch]);

  return (
    <div className="app-container">
      <Header/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/shop' component={ShopPage} />
        <Route 
          path='/signin' 
          render={() => 
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <Authentication />
            )
          }
        />
      </Switch>
    </div>
  );
}

export default App;
