import classes from "./NavToggle.module.css";


function NavToggle({callback}) {
  return ( 
    <button className={classes.NavToggle} onClick={callback}>
      &nbsp;
    </button>
  );
}

export default NavToggle;