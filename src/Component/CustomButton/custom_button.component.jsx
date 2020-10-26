import React from 'react';
import './custom_button.styles.scss';

const CustomButton = ({handleSubmit,children,isGoogleSignIn,...otherProperties}) => (
   <button className= {`${isGoogleSignIn ? 'sign_in_with_google' : ''} custom-button`} onSubmit={handleSubmit} {...otherProperties}>{children}</button>
);

export default CustomButton;