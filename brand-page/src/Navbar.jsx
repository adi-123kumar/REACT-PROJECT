import "./Navbar.css";
export default function Nabbar(){
    return(
        <nav>
            <div className="logo">
                <img src="brand_logo.png" alt="" />
            </div>
             <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
             </ul>
             <button className="loginbutton">Login</button>
        </nav>
    )
}