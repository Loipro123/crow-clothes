import React from 'react';
import './sign_in.styles.scss';
import InputForm from '../InputForm/input_form.component';
import CustomButton from '../CustomButton/custom_button.component';
import {signinWithGoogle,auth} from '../../firebase/firebase.untils';
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit =  async (event) => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        }catch(error){
            console.log(error);
        }
        
    }
    render(){
        return (
            <div className='signin'>
               <h3 className='title'>Sign In</h3>
              <form onSubmit={this.handleSubmit}>
                <InputForm name='email' type='email' handleChange={this.handleChange} label = 'Email' value ={this.state.email} required/>
                <InputForm name='password' type='password' handleChange={this.handleChange} label = 'Password' value ={this.state.password} required/>
                <div className='buttons'>
                    <CustomButton type='submit' handleSubmit={this.handleSubmit}>Sign In</CustomButton>
                    <CustomButton type='button' onClick={signinWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
              </form>
            </div>
        );
    }
}

export default SignIn;