import { useId, type ComponentProps } from "react"
import { requestFormStyles } from "./requestStyle"

interface InputProps extends ComponentProps<"input">{
  label: string,
  error?: string,
  isRequired?: boolean
}

function InputFields({label, isRequired = false, error, id, className, type, ...rest}:InputProps){
   const genID = useId()
   const inputId = id ?? genID
   const errorId = `${inputId}-error`
   const myStyle = type === "checkbox"? 'flex md:gap-[0.3rem] gap-[1rem] w-45' : 'flex flex-col w-full'
  const inputContainer = type === "radio" ? "flex md:gap-[0.3rem] gap-[1rem] w-45 items-center" : myStyle
  const labeStyle = type === "checkbox" ? "text-purple-800 font-bold" : "text-indigo-900 font-bold "

   return(
    <div className={inputContainer}>
      <label htmlFor={inputId} className={labeStyle}>
        {label}
        {isRequired && <span aria-hidden="true" className="text-red-700"> * </span>}
        </label>

        <input id={inputId}
        aria-required={isRequired || undefined}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={className ?? requestFormStyles.input}
        type={type}
        {...rest} />

        {error && <p id={errorId} className={requestFormStyles.error}>{error}</p>}
    </div>
   )
}
export default InputFields