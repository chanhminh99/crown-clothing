import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import {connect} from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/auth/sign-in-and-sign-up.component';

import { setCurrentUser } from './redux/user/user.actions';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()


    this.unsubscribeFromAuth = null

    this.unsubscribeSnapshot = null
  }

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)


        // Listening to userRef data changed
        this.unsubscribeSnapshot = userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
    this.unsubscribeSnapshot()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
        </Switch>
      </div>
  );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
