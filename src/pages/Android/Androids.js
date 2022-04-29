import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { getProduct } from "../../data/Products";
import classes from "./Android.module.css";



function Androids() {
  const params = useParams();
  const product = getProduct(params.productId);
  if (!product) {
    return <div> you write wrong address!</div>
  }

  console.log(params);
  return ( 
    <>
      <div className={classes.Androids}>
        <Header title={product.title} >
          <img src={product.image}/>
          {product.description}
        </Header>
      </div>
      
    </>
  );
}

export default Androids;