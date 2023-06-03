export function createProductsMarkup(data) {
  const markup = data
    .map(
      ({ title, description, price }) =>
        `
    <li>
      <h3>${title}</h3>
      <p>${description}</p>
      <p>${price}</p>
    </li>
    `
    )
    .join("");
  return markup;
}

export function createProductMarkup({ title, description, price }) {
  return `
    <li>
      <h3>${title}</h3>
      <p>${description}</p>
      <p>${price}</p>
    </li>
    `;
}
