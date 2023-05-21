export function getProducts() {
  return fetch(import.meta.env.VITE_API_KEY + "/products")
    .then((r) => r.json())
    .then((d) => d);
}

export function getProduct(id) {
  return fetch(import.meta.env.VITE_API_KEY + "/products/" + id)
    .then((r) => r.json())
    .then((d) => d);
}
