import React from 'react';
import './SignInandSignUp.styles.scss';
import SignIn from '../../Component/SignIn/sign_in.component';
import SignUp from '../../Component/SignUp/sign_up.component';
const SignInandSignUp = () => (
   <div className='signInandsignUp'>
     <SignIn/>
     <SignUp/>
   </div>
);

export default SignInandSignUp;