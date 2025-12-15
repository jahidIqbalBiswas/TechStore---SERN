export default function ProductsStatusText({ loading }) {
  return <p>{loading ? loading.message : "No product found."}</p>;
}
