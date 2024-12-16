import Leftpart from "./Leftpart";
import Rightpart from "./Rightpart";
import "./mainbox.css"
export default function Mainbox(){
    return (
        <div className="mainbox">
            <Leftpart></Leftpart>
            <Rightpart></Rightpart>
        </div>
    )
}