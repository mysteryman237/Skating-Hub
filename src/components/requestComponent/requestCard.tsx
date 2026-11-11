import { useEffect, useState } from "react";
import { requestCardStyle, requestFormStyles } from "./requestStyle"
import { CgProfile } from "react-icons/cg";

interface CardProp{
    file? : File
}

function RequestCard({file}:CardProp){
  const [image, setImage] = useState<string | null>(null)
 
  useEffect(() => {
     if(!file) {
        setImage(null)
        return
     } 

     const url = URL.createObjectURL(file)
     setImage(url)
     
     return () => URL.revokeObjectURL(url)
 }, [file])

    return(
        <article className={requestCardStyle.article}>
     <header className="flex flex-col gap-8 p-4">
            <h1 className={requestCardStyle.heading}>Parent Request Guidelines</h1>
            <p className={requestFormStyles.paragraph}>Please complete this form to submit your request for your child.
                 All requests are subject to review and may be approved or declined based on the circumstances.
               If you have multiple children, you may submit a 
              separate request for each child. Each request will be reviewed and considered individually.
           </p>
     </header>
     <div className={requestCardStyle.imgContainer}>
        
    {image ? <img src={image} alt="Photo of Student" className={requestCardStyle.img}/>  :
     <CgProfile className={requestCardStyle.imgplaceHolder}/>  }
    </div>
        </article>  
    )
}
export default RequestCard