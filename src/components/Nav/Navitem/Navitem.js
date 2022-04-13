import { NavLink } from "react-router-dom";
import "./Navitem.css";


function Navitem(props) {
  return (
    <li className="Navitem">
      <NavLink to={props.url} active={props.active}>
        
        {props.children}
      </NavLink>
    </li>
  );
};


export default Navitem;