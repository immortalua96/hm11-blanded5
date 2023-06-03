import { instance } from "../services/api";
export async function getProducts() {
  try {
    const response = await instance.get("/products");
    const products = response.data.products;
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneProductById(id) {
  try {
    const response = await instance.get(`/products/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
