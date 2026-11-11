import type React from "react";

interface FieldProp extends React.InputHTMLAttributes<HTMLInputElement>{
label: string,
}

function InputField({label, id, ...rest}: FieldProp){
 return(
    <div className="m-2 w-full">
      <label htmlFor={id} className="sr-only">{label}</label>
      <input aria-required="true" id={id} placeholder={label} {...rest} />
    </div>
 )
}
export default InputField