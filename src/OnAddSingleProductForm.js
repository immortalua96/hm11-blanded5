import { addProduct } from "./requests/products";
import { createProductMarkup } from "./services/markupService";
import { refs } from "./refs";
export async function addSingleProductForm(evt) {
  try {
    evt.preventDefault();
    const data = {};
    new FormData(evt.currentTarget).forEach((value, name) => {
      data[name] = value.trim();
    });
  
  const response = await addProduct(data)
  const markup = createProductMarkup(response)
  refs.newProductSection.innerHTML= markup
  } catch (error) {
    console.log(error);
  }
  
  
}
