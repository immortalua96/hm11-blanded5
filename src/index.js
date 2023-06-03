import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products'
import { refs } from './refs';
import { createProductsMarkup } from './services/markupService';
async function renderProducts() {
  try {
    const response = await getProducts()
    const markup = createProductsMarkup(response)
    refs.listProducts.insertAdjacentHTML('beforeend',markup)
  } catch (error) {
    console.log(error);
  }
}
renderProducts();
