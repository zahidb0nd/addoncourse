import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <section>
      <h1>Product Details</h1>
      <p>
        You clicked product number: <strong>{id}</strong>
      </p>
    </section>
  );
}
