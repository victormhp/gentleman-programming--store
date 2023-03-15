import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails({ products }) {
  const { name } = useParams();
  const product = products.find((product) => product.nameFormatted === name);

  return <h1>{product.name}</h1>;
}

export default ProductDetails;
