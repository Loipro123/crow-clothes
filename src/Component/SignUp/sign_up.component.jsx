import React from 'react';
import './sign_up.styles.scss';

import {auth,createNewUser} from '../../firebase/firebase.untils';
import InputForm from '../InputForm/input_form.component';
import CustomButton from '../CustomButton/custom_button.component';
class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert('The password does not match!');
            return;
        }
        try{
           const {user} = await auth.createUserWithEmailAndPassword(email,password);
           await createNewUser(user,{displayName});
           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           });
        }catch(error){
            console.log('Error: ' + error);
        }
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign_up'>
                <h3 className='title'>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <InputForm name='displayName' type='text' handleChange={this.handleChange} label = 'Full Name' value ={displayName} required/>
                    <InputForm name='email' type='email' handleChange={this.handleChange} label = 'Email' value ={email} required/>
                    <InputForm name='password' type='password' handleChange={this.handleChange} label = 'Pass Word' value ={password} required/>
                    <InputForm name='confirmPassword' type='password' handleChange={this.handleChange} label = 'Confirm PassWord' value ={confirmPassword} required/>
                    <CustomButton type='submit' handleSubmit={this.handleSubmit}>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;