import Input from "./Input.jsx";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation.js"
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {enteredValue: emailValue,
    handleInputChanges: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailIsValid
  } = useInput('', (value)=>isEmail(value) && isNotEmpty(value));

  const {enteredValue: passwordValue,
    handleInputChanges: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordIsValid
  } = useInput('', (value)=>hasMinLength(value, 6) && isNotEmpty(value))


  function handleSubmit(event){
    event.preventDefault();
    if(emailIsValid || passwordIsValid){
      return;
    }
    console.log('Submitted!');
    console.log(emailValue, passwordValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label="Email"
         id="email"
         type="email" 
         name="email" 
         onBlur={handleEmailBlur}
         onChange={handleEmailChange} 
         value={emailValue}
         error={emailIsValid && 'please enter valid email'}
         />

        <Input 
        label="Password"
        id="password"
        type="password" 
        name="password"
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange} 
        value={passwordValue}
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
