
export const mainStyle = {
  main: `relative pt-[5rem]`,
  herSecOverlay: 'absolute inset-x-0 bottom-0  bg-linear-to-b from-transparent via-slate-90/50 to-slate-900',
  priceSecOverlay:`pointer-events-none absolute inset-0 z-5
   bg-linear-to-b from-slate-900 via-slate-900/50 to-transparent h-40`,
  overLay: 'w-full h-full fixed inset-x-0 top-20 z-0 duration-500 bg-slate-900 md:hidden'
} as const

export const heroStyles = {
  heroContainer: 'flex min-h-[80dvh] justify-center items-center flex-col text-center pt-[55px] relative isolate overflow-hidden',
  headingSpan: 'bg-linear-to-r from-rose-900 to-slate-900 bg-clip-text text-transparent animate-color-roll bg-[length:150%_100%]',
  title: "text-5xl font-[800] md:text-6xl m-4 text-indigo-200",
  subtitle: "text-lg text-slate-200 max-w-md mb-4 text-gray-100",
  heroBtn: `bg-linear-to-r from-blue-500 to-blue-800 
        text-white px-[1rem] py-[1rem] font-[700] m-4 rounded-[20px] animate-bounce
        shadow-[inset_0_1px_0_#ffffff59,0_1px_2px_#0006,0_8px_24px_-6px_#5b5bf099]
       cursor-pointer hover:bg-transparent hover:outline-2 duration-500`,
  video: 'absolute inset-0 h-full w-full object-cover -z-10',
  overLay: 'absolute inset-0 -z-10 bg-slate-900/75',
  nameStyle: 'italic text-7xl'
} as const;

export const priceSection = {
  section: 'relative isolate overflow-hidden p-[20px] flex gap-[1.2rem] flex-col md:gap-[3rem]',
   header: 'p-[10px] flex flex-col gap-[0.6rem] md:flex-row md:gap-[5rem] justify-around',
   headerParagraph: 'text-balance font-[500] self-end p-[5px] text-stone-50',
   cardsContainer: 'mt-12 grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]',
   heading: "text-2xl font-[700] leading-tight tracking-tight max-w-xl text-stone-50 md:text-3xl",
   Basic: 'bg-indigo-300',
   image: 'absolute object-cover -z-15 inset-0 h-full w-full',
   overLay: 'absolute inset-0 -z-10 bg-indigo-900/25'
} as const

export const cardStyles = {
  article: `tracking-tight p-[10px] flex flex-col gap-[1rem] rounded-[20px] shadow-xl/30
           hover:-translate-y-4 duration-300 hover:cursor-pointer hover:bg-stone-50 z-20`,
  cardTitle: 'text-[17px] font-[600] text-slate-900',
  planDes: 'font-[600] text-[15px] text-slate-700',
  planPriceContainer: 'flex flex-col gap-[0.5rem] my-[0.6rem]',
   planPrice: 'text-[25px] mr-[5px] font-[500] text-emerald-700',
   priceDuration: 'text-[14px] font-normal text-slate-500',
   priceBtn: `border w-full py-[0.3rem] rounded-[20px] border-0 
   font-[600] text-lg shadow-[inset_0_1px_0_#ffffff59,0_1px_2px_#0006,0_8px_24px_-6px_#5b5bf099]
   hover:shadow-[inset_0_2px_4px_#0004] hover:cursor-pointer duration-300`,
   planList: 'flex gap-[5px] py-[5px] items-center font-[500] hover:border-b-2 border-grey-300',
   cardHeader: 'h-[30px] w-full'
} as const

