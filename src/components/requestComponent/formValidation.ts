import countries from "i18n-iso-countries"
import z from "zod"
import { guardian } from "../temDataStore/cardsData";

export const requestSchema = z.object({
 student: z.string().min(1, {error: "Student name required"}).min(4, {error: "Name must be at least 4 characters"}),
 parent: z.string().optional(),
 sponsor: z.enum(guardian, {error: "Select one of the option"}),
 relationShip: z.string().optional(),
 boneFracture: z.boolean(),
 asthmatic: z.boolean(),
 allergy: z.boolean(),
 fullyFit: z.boolean({error: "Select at least one option"}),
 allergyDetails: z.string().optional(),
 photo: z.file({error: "Student's photo required"}).mime(["image/jpeg", "image/png", "image/webp"], {error: "Upload student's phot! png, webp or jpeg"})
          .max(2 * 1024 * 1024, {error: "Photo must be less than 2MB"}),
 date: z.iso.date({error: "Enter date of birth"}).refine(date => {
      /* This logic calculates the age of student by reducing their date of birth new Date(date) from current date new Date() */
          let sDate = new Date().getFullYear() - new Date(date).getFullYear(); return sDate >=4 },
          {error: "Student must be above 4 years"}),
 nationality: z.string({error: "Nationality is required"}).min(1, {error: "Nationality is required"})
              .refine(country => countries.isValid(country), {error: "Enter a valid country"}),

/* Because we have differnt conditions for must inputs, I used superRefine method from zod to dynamically 
render must othe the error */
}).superRefine((obj, data) => {
   const medcondition = obj.allergy || obj.asthmatic || obj.boneFracture;
   if(obj.fullyFit && medcondition){
     data.addIssue({
        code: "custom",
        path: ["fullyFit"],
        message: "None of the above can't be combined with a medical condition"
     });
   }
   if(!obj.fullyFit && !medcondition){
    data.addIssue({
        code: "custom",
        path: ["fullyFit"],
        message: "Select one of the option"
    })
   }
   if(obj.allergy && obj.allergyDetails?.trim() === ""){
     data.addIssue({
        code: "custom",
        path: ["allergyDetails"],
        message: "State the kind of allergy"
     })
   }
   if( obj.sponsor === "parent" && ( obj.parent?.trim().length ?? 0) < 4 ){
      data.addIssue({
        code: "custom",
        path: ["parent"],
        message: "Name must be at least 4 characters"
      })
   }
   if(obj.sponsor === "sponsor" && (obj.relationShip?.trim().length ?? 0) < 4){
       data.addIssue({
        code: "custom",
        path: ['relationShip'],
        message: "State your relationship with the student!" 
       })
   }
   if( obj.sponsor === "sponsor" && ( obj.parent?.trim().length ?? 0) < 4 ){
      data.addIssue({
        code: "custom",
        path: ["parent"],
        message: "Name must be at least 4 characters"
      })
   }
   let age = new Date().getFullYear() - new Date(obj.date).getFullYear();
   if(obj.sponsor === "student" && age < 18){
    data.addIssue({
      code: "custom",
      path: ["date"],
      message: "Children below 18 can't enroll themselves"
    })
   }
})
export type FormValues = z.infer<typeof requestSchema>