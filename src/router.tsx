import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./layOut/mainLayOut";
import Home from "./layOut/home";
import AuthLayOut from "./layOut/authLayOut";
import SignIn from "./components/signInComponents/signIn";
import SignUp from "./components/signUpComponents/signup";
import PriceSection from "./components/mainComponents/priceCardsSection";
import NewAccountConfirmation from "./components/confirmationCards/newAccountConfimation";
import Request from "./components/requestComponent/request";

export const router = createBrowserRouter([
     {element: < MainLayOut />, children:
         [{ index: true, element: <Home /> },
            {path: "PriceSection", element: <PriceSection />}
          ]},
     {element: <AuthLayOut />, children: [
         {path: "SignIn", element: <SignIn />},
         {path: "SignUp", element: <SignUp />},
         {path: "NewAccountConfirmation", element: <NewAccountConfirmation />},
         {path: "Request", element: <Request />}
     ]}
])
