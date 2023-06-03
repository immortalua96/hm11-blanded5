import { getOneProductById } from "./requests/products";
import { createProductMarkup } from "./services/markupService";
import { refs } from "./refs";

export async function onSingleProductFormSubmit(event) {
  event.preventDefault();
  const id = event.currentTarget.elements.id.value.trim();
  const result = await getOneProductById(id);
  const markup = createProductMarkup(result);
  refs.divSingleProduct.innerHTML = markup;
}
