import "./Navitem.css";


function Navitem(props) {
  return (
    <li className="Navitem">
      <a href={props.url}>
        {props.children}
      </a>
    </li>
  );
};


export default Navitem;