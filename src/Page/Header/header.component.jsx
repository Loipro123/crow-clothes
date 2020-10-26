import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.untils';
const Header = ({user}) => {
      return (
         <div className='header'>
            <div className='logo-container'>
                <Logo/>
            </div>
            <div className='options'>    
                  <Link to='/' className='option'>Home</Link>
                  <Link to='/shop' className='option'>Shop</Link>
                  {
                     user ? 
                     <div className='option' onClick= {() => auth.signOut()}>
                       Sign Out
                     </div>:
                     <Link to='/signIn' className='option'>Sign In</Link>
                  }
            </div>
         </div>
      );
} 

export default Header;