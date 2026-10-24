


export const footerStyle ={
  section: 'p-8 bg-linear-to-b from-indigo-900 to-slate-900',
  container: 'grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-[1rem] p-4 mb-[1rem]',
  headings: 'font-[600] text-xl text-white',
  footerList: '*:p-1 *:font-[500]  *:text-slate-300 [&_a]:hover:text-slate-50',
  bottomBar: ' border-t-1 border-white/15 p-2 flex flex-col gap-4',
  footerParagraph: 'text-center text-slate-400',
  footerLogos: 'flex justify-around items-center flex-row-reverse m-[2px] animate-marquee'
} as const