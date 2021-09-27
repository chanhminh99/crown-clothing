import React from 'react';
import { Switch, Route } from 'react-router';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/auth/sign-in-and-sign-up.component';

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

    this.state = {
      currentUser: null
    }

    this.unsubscribeFromAuth = null

    this.unsubscribeSnapshot = null
  }

  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)


        // Listening to userRef data changed
        this.unsubscribeSnapshot = userRef.onSnapshot((snapShot) => {
          this.setState({currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }})
        })

      }

      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
    this.unsubscribeSnapshot()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
