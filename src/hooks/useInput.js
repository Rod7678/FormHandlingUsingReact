import { useState } from "react";

export function useInput(defaultValue, validationFn){
     const [ enteredValue, setEnteredValue] = useState(defaultValue);
     const [ didEdit, setDidEdit] = useState(false);

     const valueIsValid = validationFn(enteredValue)

       function handleInputChanges(event){
         setEnteredValue(event.target.value);
         setDidEdit(false);
       }    
       
       function handleInputBlur(){
         setDidEdit(true);
       }


       return {
        enteredValue,
        handleInputBlur,
        handleInputChanges,
        hasError: didEdit && !valueIsValid
       }
       

}