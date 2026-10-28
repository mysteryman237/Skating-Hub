export const signInStyle = {
  section: `p-3 max-h-dvh`,
  wrapper: ` shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] rounded-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-2
             bg-[linear-gradient(115deg,#c5f1df_0%,#e8eef5_48%,#cbd6fa_100%)]
             before:content-[''] before:absolute before:inset-0
             before:bg-[linear-gradient(rgba(110,130,155,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(110,130,155,0.09)_1px,transparent_1px)]
             before:bg-[size:160px_160px] `,
  gridDesign: `absolute inset-0 pointer-events-none
             bg-[radial-gradient(circle_at_20%_35%,rgba(130,170,255,0.25)_0,transparent_7px),radial-gradient(circle_at_75%_25%,rgba(155,130,255,0.25)_0,transparent_9px),radial-gradient(circle_at_55%_65%,rgba(130,150,255,0.3)_0,transparent_8px)]`,
  glowingDesign: `absolute inset-0 pointer-events-none
             bg-[radial-gradient(circle_at_20%_35%,rgba(130,170,255,0.35)_0px,transparent_8px),radial-gradient(circle_at_75%_25%,rgba(155,130,255,0.4)_0px,transparent_10px),radial-gradient(circle_at_55%_65%,rgba(130,150,255,0.35)_0px,transparent_9px)]`,
  circleDesign: `absolute -bottom-16 -right-10 h-36 w-36 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 pointer-event-none`           
} as const


export const formStyles = {
    form: `rounded-4xl flex flex-col items-center justify-center px-6 md:order-2 max-w-xl  z-10`,
     title: `text-xl font-bold text-slate-900`,
      inputs: `p-2 md:p-3 border-b border-gray-300 font-semibold text-slate-800 w-full
              bg-blue-50 focus:border-b-2 focus:border-blue-600 outline-none`,
     submitBtn: `bg-linear-to-r from-[#8A9FFC] to-[#16308F] text-white font-semibold m-2 
              rounded-[20px] shadow-[inset_0_1px_0_#ffffff59,0_1px_2px_#0006,0_8px_24px_-6px_#5b5bf099]
              cursor-pointer hover:from-blue-600 hover:to-blue-900 hover:outline-2 w-[60%] md:w-[60%] py-3`,
     errorText: "text-sm text-red-600",
     passwordLinks: `text-blue-600 hover:border-blue-600 border-b-2 border-transparent`
} as const

/*Styley for the form card component */
export const formCardStyles = {
  article: `bg-linear-to-b from-[#0F1F5C] to-[#16308F] relative max-h-screen md:flex flex-col overflow-hidden
   gap-2 md:gap-6 items-center rounded-t-3xl md:rounded-l-3xl`,
  headerTitle: `text-lg text-slate-900 font-semibold md:font-bold`,
  bodyContainer: `grow relative flex flex-col md:gap-6 items-center`,
  title: `text-2xl md:text-4xl font-bold text-white`,
  icon: `inline-block align-middle text-amber-400`,
  image: `object-cover w-40 md:w-[28rem] bg-transparent`,
  gridDesign: `absolute -top-0 -left-0 h-[90%] w-full rounded-br-[90%] bg-linear-[120deg,#2347C8,#3B6BE8]`,
  middleCircle: `absolute left-[70%] md:left-[70%] z-10 top-[45%] h-20 w-20 md:h-40 md:w-40 rounded-full bg-linear-[135deg,#0EA5E9,#2563EB]`,
  leftCircle: `absolute -bottom-15 -left-15  md:-bottom-20 md:-left-20 z-10 h-40 w-40 md:h-70 md:w-70 rounded-full bg-gradient-to-br from-sky-500 to-blue-700`
} as const