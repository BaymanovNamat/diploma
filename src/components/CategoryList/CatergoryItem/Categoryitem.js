import classes from "./Categoryitem.module.css";

import { Link } from "react-router-dom";

function Categoryitem({ category }) {


  return ( 
    <>   
      <div className={classes.Categoryitem}>
          <Link to={"/categories" + category.categoryId}>
            {category.title}
          </Link>
      </div>
    </>
  );
}

export default Categoryitem;