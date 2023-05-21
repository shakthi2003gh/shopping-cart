export function getProducts() {
  return fetch(import.meta.env.VITE_API_KEY + "/products")
    .then((r) => r.json())
    .then((d) => d);
}
