import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Page/Home/home.component';
import Shop from './Page/Shop/shop.component';
import Header from './Page/Header/header.component';
import SignInandSignUp from './Page/SignInandSignUp/SignInandSignUp.component';
import {auth,createNewUser} from './firebase/firebase.untils';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
       currentUser: null
    }
 }

 unsubscribeFromAuth = null;

 componentDidMount() {
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createNewUser(userAuth);
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
        }
        this.setState({
          currentUser:userAuth
        })
     });
 }
 componentWillUnmount(){
    this.unsubscribeFromAuth();
 }
  render(){
    return (
      <div>
        <Header user={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/signIn' component={SignInandSignUp}/>
        </Switch>
      </div>
      
    );
  }
}

export default App;
