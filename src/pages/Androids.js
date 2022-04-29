import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getProduct } from "../data/Products";

function Androids() {
  const params = useParams();
  const product = getProduct(params.productId);
  if (!product) {
    return <div> you write wrong address!</div>
  }

  console.log(params);
  return ( 
    <>
      <Header title={product.title} image={product.image}>
        {product.description}
      </Header>
    </>
  );
}

export default Androids;