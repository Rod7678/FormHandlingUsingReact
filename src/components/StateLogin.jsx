import { useState } from "react";
import { ESModulesEvaluator } from "vite/module-runner";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onBlur={()=> handleInputBlur('email')}
          onChange={(event)=>handleInputChanges('email', event.target.value)} 
          value={enteredValues.email}
          />

          <div className="control-error">
            {emailIsValid && <p>please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password"  
          onChange={(event)=>handleInputChanges('password', event.target.value)} 
          value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
