import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { User } from './model';
import { AuthAction } from './redux/auth/auth.types';
import { setCurrentUser } from './redux/auth/auth.actions';

import { Authentication, HomePage, ShopPage } from './pages';
import Header from './components/header/header';

import './App.css';
import { RootState } from './redux/root-reducer';

interface AppProps {
  currentUser: User | null;
  setCurrentUser(user: User | null): AuthAction;
}

function App({ currentUser, setCurrentUser }: AppProps) {
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

const mapStateToProps = ({ auth }: RootState) => ({
  currentUser: auth.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
