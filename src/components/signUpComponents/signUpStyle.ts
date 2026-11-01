/* styles for the SignUp component */
export const signUpStyle = {
  section: `p-3 min-h-dvh bg-transparent`,
  wrapper: ` bg-[rgba(255,255,255,0.25)] border-white/45 border-4
  shadow-[0_8px_32px_rgba(11,37,69,0.28)]"> rounded-2xl grid grid-cols-1 md:grid-cols-[1fr_2fr]`
} as const
 
/*style for the form component */
export const formStyles = {
  form: `rounded-4xl flex flex-col items-center justify-center px-6 shadow-xl`,
  title: `text-2xl font-bold text-slate-900`,
  inputs: `py-2 md:py-4 px-8 font-bold text-slate-900 w-full rounded-[20px]  bg-white/25 border border-white/50
               shadow-[0_4px_12px_rgba(11,37,69,0.15)] focus:shadow-[0_0_0_3px_rgba(0,119,255,0.35)] 
               outline-none transition placeholder:text-[#0B2545]/70`,
  termsContainer: `flex items-center gap-2 m-2`,
  termsPara: `text-slate-900`,
  submitBtn: `w-full md:w-[60%] py-3 rounded-full font-semibold text-white bg-gradient-to-br from-[#1E88FF] to-[#0A3FA8]
    shadow-[0_6px_20px_rgba(10,63,168,0.45)] transition hover:from-[#0A5BD8] hover:to-[#0847A8] m-4
    active:scale-[0.98] cursor-pointer`,
   alert: `text-sm text-red-600`
} as const

/*Styley for the form card component */
export const formCardStyles = {
  article: ` md:flex flex-col gap-2 md:gap-6 items-center rounded-t-3xl md:rounded-l-3xl`,
  hearder: `w-full pl-4`,
  headerTitle: `text-lg text-[#0B2545] font-semibold md:font-bold`,
  bodyContainer: `grow flex flex-col md:gap-6 items-center`,
  title: `text-2xl md:text-4xl font-bold text-slate-900`,
  icon: `inline-block align-middle`,
  image: `object-cover w-40 md:w-[28rem]`
} as const