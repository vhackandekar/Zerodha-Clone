import Heros from "./Heros";
import Price from "./Price";
import Education from "./Education";
import Stats from "./Stats";
import Signup from "./Signup";

export default function Homepage(){
    return(
       <>
        
         <Heros/>
         
         <Stats/>
         <Price/>
         <Education/>
          <Signup/>
         
       </>
    )
}