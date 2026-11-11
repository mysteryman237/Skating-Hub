import { useState } from "react";
import RequestCard from "./requestCard";
import RequestForm from "./requesttForm";


function Request(){
  const [photo, setPhoto] = useState<File>()
    return(
        <section className="flex justify-center items-center">
            <div className="grid md:grid-cols-[1fr_2fr] gap-4 bg-black/10 md:w-[80%] border-6 border-white/30
            shadow-[0_8px_2px_rgba(40,25,80,0.25),0_5px_3px_rgba(40,25,80,0.40)]">
                <RequestCard file={photo}/>
                <RequestForm onPhotoChange={setPhoto}/>
            
            </div>
        </section>
    )
}
export default Request