import type React from "react";
import { formStyles } from "./signUpStyle";

interface FieldProp extends React.InputHTMLAttributes<HTMLInputElement>{
label: string,
error?: string
}

function InputField({label, id, error, ...rest}: FieldProp){
 return(
    <div className="m-2 w-full">
      <label htmlFor={id} className="sr-only">{label}</label>
      <input aria-required="true" id={id} placeholder={label} {...rest}  className={formStyles.inputs}/>
      {error && <p className={formStyles.alert}>{error}</p>}
    </div>
 )
}
export default InputField