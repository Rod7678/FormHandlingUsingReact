import { useRef, useState } from "react";

export default function Login() {
  const [emailIsValid, setEmailIsValid] = useState(false);

  const email = useRef();
  const password = useRef();


  function handleSubmit(event){
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailValid = enteredEmail.includes('@');
    if(!emailValid){
      setEmailIsValid(true);
      return;
    }
    setEmailIsValid(false)
    console.log(enteredEmail,enteredPassword)
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
          ref={email}
          />
          <div className="control-error">
            {emailIsValid && <p>Please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password"  
          ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
