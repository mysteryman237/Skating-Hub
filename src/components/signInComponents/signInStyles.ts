export const signInStyle = {
  section: `p-3 max-h-dvh`,
  wrapper: ` bg-[rgba(255,255,255,0.25)] border-white/45 border-4
            shadow-[0_8px_32px_rgba(11,37,69,0.28)]"> rounded-2xl grid grid-cols-1 md:grid-cols-[1fr_2fr] `,
  circleDesign: `absolute -bottom-0 -right-10 h-36 w-36 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 pointer-event-none`           
} as const


export const formStyles = {
    form: `rounded-4xl flex flex-col items-center justify-center px-6 md:order-2 max-w-xl  z-10`,
     title: `text-2xl font-bold text-slate-900`,
       inputs: `py-2 md:py-4 px-8 font-bold text-slate-900 w-full rounded-[20px]  bg-white/25 border border-white/50
               shadow-[0_4px_12px_rgba(11,37,69,0.15)] focus:shadow-[0_0_0_3px_rgba(0,119,255,0.35)] 
               outline-none transition placeholder:text-[#0B2545]/70`,
    submitBtn: `w-full md:w-[60%] py-3 rounded-full font-semibold text-white bg-gradient-to-br from-[#1E88FF] to-[#0A3FA8]
    shadow-[0_6px_20px_rgba(10,63,168,0.45)] transition hover:from-[#0A5BD8] hover:to-[#0847A8] m-4
    active:scale-[0.98] cursor-pointer`,
     errorText: "text-sm text-red-600",
     passwordLinks: `text-blue-600 hover:border-blue-600 border-b-2 border-transparent`
} as const

/*Styley for the form card component */
export const formCardStyles = {
  article: `md:flex flex-col gap-2 md:gap-6 items-center rounded-t-3xl md:rounded-l-3xl relative`,
  headerTitle: `text-lg text-slate-900 font-semibold md:font-bold`,
  bodyContainer: `grow relative flex flex-col md:gap-6 items-center`,
  title: `text-2xl md:text-4xl font-bold text-slate-900`,
  icon: `inline-block align-middle text-amber-400`,
  image: `object-cover w-40 md:w-[28rem] bg-transparent`,
  gridDesign: `absolute -top-0 -left-0 h-[90%] w-full rounded-br-[90%] bg-white/50 border-6 border-white`,
  middleCircle: `absolute left-[70%] md:left-[70%] z-10 top-[45%] h-20 w-20 md:h-40 md:w-40 rounded-full bg-white/50`,
  leftCircle: `absolute -bottom-15 -left-15  md:-bottom-20 md:-left-20 z-10 h-40 w-40 md:h-70 md:w-70 rounded-full bg-white/50`
} as const