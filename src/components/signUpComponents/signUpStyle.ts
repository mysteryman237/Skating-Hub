/* styles for the SignUp component */
export const signUpStyle = {
  section: `p-3 min-h-dvh`,
  wrapper: `bg-[#8A9FFC] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl grid grid-cols-1 md:grid-cols-[1fr_2fr]`
} as const
 
/*style for the form component */
export const formStyles = {
  form: `rounded-4xl flex flex-col items-center justify-center px-6 bg-white md:order-2`,
  title: `text-xl font-bold text-slate-900`,
  inputs: `p-2 md:p-3 border-b border-gray-300 font-semibold text-slate-800 w-full focus:bg-blue-50 focus:border-b-2 focus:border-blue-600 outline-none`,
  termsContainer: `flex items-center gap-2 m-2`,
  termsPara: `text-slate-600`,
  submitBtn: `bg-linear-to-r from-[#8A9FFC] to-blue-800 text-white font-semibold m-2 
              rounded-[20px] shadow-[inset_0_1px_0_#ffffff59,0_1px_2px_#0006,0_8px_24px_-6px_#5b5bf099]
              cursor-pointer hover:bg-from-blue-600 hover:to-blue-900 hover:outline-2 w-full md:w-[60%] py-3`,
   alert: `text-sm text-red-600`
} as const

/*Styley for the form card component */
export const formCardStyles = {
  article: `bg-[#8A9FFC] md:flex flex-col gap-2 md:gap-6 items-center rounded-t-3xl md:rounded-l-3xl`,
  hearder: `w-full pl-4`,
  headerTitle: `text-lg text-slate-900 font-semibold md:font-bold`,
  bodyContainer: `grow flex flex-col md:gap-6 items-center`,
  title: `text-2xl md:text-4xl font-bold text-slate-900`,
  icon: `inline-block align-middle`,
  image: `object-cover w-40 md:w-[28rem]`
} as const