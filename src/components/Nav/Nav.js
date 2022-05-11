
import Navitem from "./Navitem/Navitem";
import classes from "./Nav.module.css";

// import { useState } from "react";


function Nav() {

  // const [toggle, setToggle] = useState(false);

  // function onToggle() {
  //   setToggle(!toggle);
  // };

  // <ul className={`${classes.list} ${toggle ? `${classes.active}` : "" }`}></ul>

//   <div className={`${classes.burger} ${toggle ? `${classes.active}` : "" }`} onClick={onToggle}>
//   <span></span>
// </div>



  return (
    <ul className={`${classes.Nav}`}>
          <Navitem url="/" active>
            Main page
          </Navitem>
          <Navitem url="/allandroid">
            All about Androids
          </Navitem>
          <Navitem url="/alliphones">
            All about Iphones
          </Navitem>
          <Navitem url="/faq">
            FAQ about this website 
          </Navitem>
        </ul>

  );
}

export default Nav;