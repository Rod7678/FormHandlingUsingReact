import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
 const [ enteredValues, setEnteredValues] = useState({
  email: '', 
  password: ''
});
 const [ didEdit, setDidEdit] = useState({
  email: false, 
  password: false
});

const emailIsValid =  didEdit.email && !enteredValues.email.includes('@');
const passwordIsValid =  didEdit.password && enteredValues.password.trim() < 6 ;

  function handleInputChanges(identifier, value){
    setEnteredValues((prevValues)=>({
      ...prevValues,
      [identifier] : value
    }));

    setDidEdit((prevEdit)=>({
      ...prevEdit,
      [identifier]: false
    }));
  }


  
  function handleInputBlur(identifier){
    setDidEdit((prevValues)=>({
      ...prevValues,
      [identifier]: true
    }));
    
  }
  
  function handleSubmit(event){
    event.preventDefault();
    if(emailIsValid){
      return;
    }
    console.log('Submitted!');
    console.log(enteredValues)
  }
  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label="Email"
         id="email"
         type="email" 
         name="email" 
         onBlur={()=> handleInputBlur('email')}
         onChange={(event)=>handleInputChanges('email', event.target.value)} 
         value={enteredValues.email}
         error={emailIsValid && 'please enter valid email'}
         />

        <Input 
        label="Password"
        id="password"
        type="password" 
        name="password"
        onBlur={()=> handleInputBlur('password')}
        onChange={(event)=>handleInputChanges('password', event.target.value)} 
        value={enteredValues.password}
        error={passwordIsValid && 'please enter valid password'}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
