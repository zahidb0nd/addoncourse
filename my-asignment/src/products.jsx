import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const buttons = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section>
      <h1>Products</h1>
      <p>Pick a product number:</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
        {buttons.map((n) => (
          <button
            key={n}
            className="btn"
            onClick={() => navigate(`/products/${n}`)}
          >
            {n}
          </button>
        ))}
      </div>
    </section>
  );
}
