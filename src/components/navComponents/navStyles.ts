
export const navStyles = {
    nav: `h-[80px] p-[10px] flex justify-between text-indigo-200 items-center
     fixed inset-x-0 top-0 w-full z-30 bg-slate-900/80 backdrop-blur-md border-b border-white/10 text-slate-200`,
    logoContainer: 'flex gap-[1rem] justify-around items-center',
    logoText: 'font-[800] bg-linear-to-r from-rose-300 to-rose-400 text-transparent bg-clip-text animate-color-roll',
    navSub: 'hidden md:block',
    navList: 'flex justify-between gap-[1rem] items-center font-[600]',
    navButtonContainer: 'gap-[1rem] items-center justify-between font-[600] hidden md:flex',
    signUpBtn: `bg-linear-to-r from-blue-500 to-blue-900 px-[1rem] py-[0.3rem] rounded-[15px]
               hover:bg-transparent hover:outline-2 cursor-pointer
              shadow-[inset_0_1px_0_#ffffff59,0_1px_2px_#0006,0_8px_24px_-6px_#5b5bf099]`,
    logInBtn: 'cursor-pointer px-[1rem] py-[0.3rem] hover:outline-2 rounded-[15px]',
    navMenuIconContainer: 'md:hidden'
} as const

export const navMenuStyles = {
  navMenuContainer: 'flex flex-col gap-[1rem] justify-center fixed top-20 w-80 items-start z-100 duraion-300',
  hideMenu: 'flex flex-col gap-[1rem] justify-center fixed top-20 w-80 items-start z-100 duraion-300 hidden',
   signUpBtn: `bg-linear-to-r from-blue-500 to-blue-900 px-[1rem] py-[0.3rem] rounded-[15px]
               hover:bg-transparent hover:outline-2 cursor-pointer
              shadow-[inset_0_1px_0_#ffffff59,0_1px_2px_#0006,0_8px_24px_-6px_#5b5bf099]`,
    logInBtn: 'cursor-pointer px-[1rem] py-[0.3rem] hover:outline-2 rounded-[15px]',
    navList: 'justify-between gap-[2rem] items-center font-[600] flex flex-col',
    navButtonContainer: 'gap-[1rem] items-center justify-center font-[600] flex flex-col',
} as const