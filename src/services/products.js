import { formatPrice, formatName } from '../utils';
import { productsList } from '../mocks/products';

export async function searchProducts() {
  try {
    const products = productsList.map((product) => {
      return {
        id: product.id,
        name: product.name,
        nameFormatted: formatName(product.name),
        description: product.description,
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
