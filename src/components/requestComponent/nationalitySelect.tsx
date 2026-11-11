import countries from "i18n-iso-countries"
import en from "i18n-iso-countries/langs/en.json"
import Select from "react-select"

countries.registerLocale(en)
const listOfCountries = Object.entries(countries.getNames("en"))
/* countries.getNames return an object of objects with countrt name and country code so we convert the object to array
then map each country to an object containing country code and name, here we use value and label because we are using rect-select, not html select */
     .map(([value, label]) => ({value, label}))
     .sort((a, b) => a.label.localeCompare(b.label))

interface Prop{
 value: string,
 onChange: (label: string) => void
}

     function Nationality({value, onChange}:Prop){

        return (
            <Select className="w-full" value={listOfCountries.find(country => country.value === value) ?? null}
                     onChange={ch => onChange(ch?.value ?? "")}
                     options={listOfCountries}
                     name="nationality"
                      placeholder="Nationality"
                      id="nationality"
                     isClearable
                      unstyled 
                      classNames={{
                        control: () => "w-full p-4 px-5 rounded-[20px] bg-white/25 border border-white/50 shadow-[0_4px_12px_rgba(11,37,69,0.15)]",
                     placeholder: () => "text-[#0B2545]/70 font-bold",
                      singleValue: () => "text-slate-900 font-bold",
                      input: () => "text-slate-900 w-full",
                      menu: () => "mt-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg overflow-hidden",
                      option: ({ isFocused }) =>`px-5 py-2 cursor-pointer ${isFocused ? "bg-blue-500/20" : ""}` }}/>
        )
     }
     export default Nationality