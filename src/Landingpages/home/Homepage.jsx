import Navbar from "./Navbar";
import Heros from "./Heros";
import Price from "./Price";
import Education from "./Education";
import Footer from "./Footer";
import Stats from "./Stats";
import Signup from "./Signup";

export default function Homepage(){
    return(
       <>
         <Navbar/>
         <Heros/>
         
         <Stats/>
         <Price/>
         <Education/>
          <Signup/>
         <Footer/>
       </>
    )
}