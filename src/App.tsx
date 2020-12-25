import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { User } from './model';
import { AuthActionTypes } from './redux/auth/auth.types';
import { setCurrentUser } from './redux/auth/auth.actions';

import { Authentication, HomePage, ShopPage } from './pages';
import Header from './components/header/header';

import './App.css';

interface AppProps {
  setCurrentUser(user: User | null): AuthActionTypes
}

function App({ setCurrentUser }: AppProps) {
  // const [currentUser, setCurrentUser] = useState<User | undefined>();

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
            } : null
          );
        });

      } else {
        setCurrentUser(null);
      }
    });
  });

  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={Authentication} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
