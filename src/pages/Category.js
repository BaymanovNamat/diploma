import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getCategory } from "../data/categories";



function Category() {
  const params = useParams();
  const category = getCategory(params.categoryId);
  if (!category) {
    return null;
  }

  // console.log(params);
  return ( 
    <>
      <div>
        <Header title={category.title} >
          <img src={category.image} alt="#"/>
        </Header>
      </div>
      
    </>
  );
}

export default Category;