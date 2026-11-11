
export const requestFormStyles = {
    form: `flex flex-col items-center gap-[1rem] md:gap-[1.5rem] p-2 shadow-xl`,
    inputWrapper: `flex flex-col justify-center md:flex-row p-2 w-full gap-[1rem] md:gap-[3rem] items-center`,
    input: ` px-4 py-2 font-bold text-slate-800 rounded-[10px] bg-white/40 backdrop-blur-xl 
            focus:shadow-[0_0_0_3px_rgba(0,119,255,0.35)]
            shadow-[0_7px_5px_rgba(40,25,80,0.25)] inset-shadow-[0_2px_4px_rgba(255,225,255,0.65)]
            outline-none transition placeholder:text-[#0B2545]/70 placeholder:text-[12px] placeholder:font-semibold
               file:font-semibold file:text-[12px] file:text-purple-600`,
    error: ` px-4 py-2 font-semibold text-red-900 rounded-[10px] w-full`,
    message: ` font-semibold text-green-900 rounded-[10px] w-full`,
    img: `w-35 h-35 rounded-[50%] border-2 border-blue-50 flex justify-center items-center text-center p-4 object-cover`,
    paragraph: `text-justify md:text-left font-semibold text-slate-900 mb-4 p-2 tracking-normal break-normal
              bg-linear-to-b from-blue-200 to-blue-300 rounded-[15px] 
              shadow-[0_8px_10px_rgba(40,25,80,0.20),0_3px_5px_rgba(40,25,80,0.40)] inset-shadow-[0_2px_4px_rgba(255,225,255,0.75)]`,
    submitBtn: `w-full md:w-[60%] py-3 rounded-full font-semibold text-white bg-linear-to-b from-blue-400/50 via-blue-600/60 to-blue-800
             shadow-[0_8px_15px_rgba(40,25,80,0.20),inset_0_2px_3px_rgba(255,255,255,0.65)] inset-shadow-[5px_8px_7px_rgba(255,225,255,0.45)] 
             transition hover:from-[#0A5BD8] hover:to-[#0847A8]
              active:scale-[0.98] cursor-pointer border border-white/70`,
    checkBoxWrapper: `px-4 relative flex flex-col md:flex-row gap-[0.7rem] bg-white/70 rounded-[10px] md:h-[40px] md:items-center
               shadow-[0_10px_15px_rgba(40,25,80,0.25),0_5px_2px_rgba(40,25,80,0.40)] inset-shadow-[0_8px_4px_rgba(255,225,255,0.65)]`,
    radioBtnWrapper: `px-4 flex flex-col md:flex-row gap-[0.5rem] bg-white/70 rounded-[10px] md:h-[30px] md:items-center
               shadow-[0_10px_15px_rgba(40,25,80,0.25),0_5px_2px_rgba(40,25,80,0.40)] inset-shadow-[0_8px_4px_rgba(255,225,255,0.65)]`,
    checkBoxWrapper1: `flex md:gap-[0.3rem] gap-[1rem] w-45`    
}

export const requestCardStyle = {
    article: `flex flex-col items-center justify-between md:h-[60%]`,
    heading: `text-2xl font-bold text-slate-900 px-3 py-2 rounded-xl bg-white/30 backdrop-blur-xl border border-white/50
               shadow-[0_4px_12px_rgba(40,50,100,0.12)] inset-shadow-[0_1px_3px_rgba(255,255,255,0.8)]`,
    imgContainer: `w-[150px] h-[150px] md:w-[200px] md:h-[200px] border-4 border-white/60 rounded-full flex justify-center items-center shrink-0 overflow-hidden text-center
                  shadow-[0_10px_10px_rgba(40,25,80,0.20),0_6px_5px_rgba(40,25,80,0.40)] inset-shadow-[0_2px_4px_rgba(255,225,255,0.75)] `,
    img: `object-cover object-center w-full h-full rounded-[50%] text-center`,
    imgplaceHolder: `w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-white/60`
}