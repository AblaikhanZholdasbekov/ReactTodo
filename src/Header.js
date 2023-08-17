import React from "react";
import rocket from './rocket.png'
function Header(){
    return <header className="header">
    <div className="header-content">
             <a className="navbar-brand" href="#">
                 <img src={rocket} alt=""/>
               </a>
                 <h1 className="to">to</h1>
                 <h1 className="do">do</h1>
         </div>
    </header>
}
export default Header;