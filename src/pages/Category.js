import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import { getCategory } from "../data/categories";
import { getProducts } from "../data/Products";



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
        <Header title={category.title} image>
          <img src={category.image} alt="#"/>
          {category.description}
        </Header>

        <ProductList products={getProducts(category.categoryId)}/>
      </div>
      
    </>
  );
}

export default Category;