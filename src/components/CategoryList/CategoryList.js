import Categoryitem from "./CatergoryItem/Categoryitem";
import classes from "./CategoryList.module.css";


function CategoryList({ categories }) {
  const categoryitems = categories.map((category) => (
    <Categoryitem key={category.categoryId} category={category}/>
  ));

  return ( 
    <div className={classes.CategoryList}>
      {categoryitems}
    </div>
    
  );
}

export default CategoryList;