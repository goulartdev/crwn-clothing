import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/auth/auth.selectors';
import { setCurrentUser } from './redux/auth/auth.actions';

import { Authentication, HomePage, ShopPage, Checkout } from './pages';
import Header from './components/header/header';

import './App.css';

function App() {
  const currentUser = useSelector(selectCurrentUser);
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
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={Checkout} />
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
