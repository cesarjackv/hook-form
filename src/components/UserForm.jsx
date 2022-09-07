import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setConfirmpasswordError] = useState("");

    // const [errors, setErrors] = useState({
    //     firstname: '',
    //     lastname: '',
    //     //email: ''
    // })
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
        if(e.target.value.length < 1){
            setFirstnameError("First Name is required!")
        }else if(e.target.value.length < 3){
            setFirstnameError("First Name must be 3 characters or more.")
        }else{
            setFirstnameError('')
        }
    };

    const handleLastname = (e) => {
        setLastname(e.target.value)
        if(e.target.value.length < 1){
            setLastnameError("Last Name is required!")
        }else if(e.target.value.length < 3){
            setLastnameError("Last Name must be 3 characters or more.")
        }else{
            setLastnameError('')
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 1){
            setEmailError("Email is required!")
        }else if(e.target.value.length < 5){
            setEmailError("Email must be 5 characters or more.")
        }else{
            setEmailError('')
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 1){
            setPasswordError("Password is required!")
        }else if(e.target.value.length < 8){
            setPasswordError("Password must be 8 characters or more.")
        }else{
            setPasswordError('')
        }
        if(e.target.value !== confirmpassword){
            setConfirmpasswordError("Passwords do not match.")
        }else{
            setConfirmpasswordError("")
        }
    };

    const handleConfirmpassword = (e) => {
        setConfirmpassword(e.target.value)
        if(e.target.value.length < 1){
            setConfirmpasswordError("Please confirm password!")
        }else if(e.target.value !==  password ){
            setConfirmpasswordError("Passwords do not match.")
        }else{
            setConfirmpasswordError('')
        }

        
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFirstname } />
                    {
                        firstnameError ?
                        <p style={{color:'red'}}>{ firstnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLastname } />
                    {
                        lastnameError ?
                        <p style={{color:'red'}}>{ lastnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleConfirmpassword }/>
                    {
                        confirmpasswordError ?
                        <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h2>Your Form Data</h2>
                <p>First Name:  {firstname}</p>
                <p>Last Name:   {lastname}</p>
                <p>Email:   {email}</p>
                <p>Password:    {password}</p>
                <p>Confirm Password:    {confirmpassword}</p>
            </div>
        </div>
    );
};
    
export default UserForm;
