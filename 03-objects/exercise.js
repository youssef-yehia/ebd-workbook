
/**
 * The name of a product.
 */
export function productName(product) {
  return product.name;
}

/**
 * Reads whichever field it is asked for.
 */
export function getField(product, field) {
  return product[field];
}

/**
 * The city a student lives in.
 */
export function studentCity(student) {
  return student.address.city;
}

/**
 * A one-line summary of a product.
 */
export function summarize(product) {
  const { name, price } = product;
  return `${name} costs ${price} EGP`;
}

/**
 * A copy of a product with a different price.
 */
export function withPrice(product, newPrice) {
  return { ...product, price: newPrice };
}
