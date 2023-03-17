import { formatPrice, formatName } from '../utils';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export async function searchProducts() {
  const productsCollectionRef = collection(db, 'products');

  try {
    const data = await getDocs(productsCollectionRef);
    const dataDocs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    const products = dataDocs?.map((product) => {
      return {
        id: product.id,
        name: product.name,
        nameFormatted: formatName(product.name),
        price: product.price,
        priceFormatted: formatPrice(product.price),
        image: product.image,
        category: product.category,
      };
    });

    return products;
  } catch (error) {
    throw new Error('Error getting products');
  }
}

export default searchProducts;
