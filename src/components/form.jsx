import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstError, setFirstError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastError, setLastError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState(""); 
    const [passwordError, setPasswordError] = useState("");  

    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");  


    const createUser = (e) => {
        console.log(e.target.value)
        if(e.target.name === "firstname") {
            setFirstName(e.target.value);
            if(e.target.value.length < 2){
                setFirstError("First name must be longer than 2 characters.");
            }
        }else if(e.target.name === "lastname") {
            setLastName(e.target.value);
            if(e.target.value.length < 2){
                setLastError("Last name must be longer than 2 characters.");
            }
        }else if(e.target.name === "email") {
            setEmail(e.target.value);
            if(e.target.value.length < 2){
                setEmailError("Email must be longer than 2 characters.");
            }
        }else if(e.target.name === "password") {
            setPassword(e.target.value);
            if(e.target.value.length < 7){
                setPasswordError("Password must be at least 8 characters.");
            }
        }
        else if(e.target.name === "confirm") {
            setConfirm(e.target.value);
            if(e.target.value !== password){
                setConfirmError("Password must match.");
            }
        }
        
    };

    
    return(
        <>
        <form onChange={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label> 
                <input name="firstname" type="text" onChange={ createUser } />
                {
                    firstError ?
                    <p style={{color: "red"}}>{ firstError }</p> : ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input name="lastname" type="text" onChange={ createUser } />
                {
                    lastError ?
                    <p style={{color: "red"}}>{ lastError }</p> : ''
                }
            </div>
            <div>
                <label>Email: </label> 
                <input name="email" type="text" onChange={ createUser } />
                {
                    emailError ?
                    <p style={{color: "red"}}>{ emailError }</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input name="password" type="password" onChange={ createUser } />
                {
                    passwordError ?
                    <p style={{color: "red"}}>{ passwordError }</p> : ''
                }
            </div>
            <div>
                {
                    confirmError ?
                    <p style={{color: "red"}}>{ confirmError }</p> : ''
                }
                <label>Confirm Password: </label>
                <input name="confirm" type="password" onChange={ createUser } />
            </div>
        </form>
        <p>Your form data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>

        </>
    );
};
    
export default UserForm;