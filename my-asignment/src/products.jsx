import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products() {
  const navigate = useNavigate()
  const buttons = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div>
      <section>
        <h1>Product</h1>
        <p>Pick a product number :</p>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}
        >
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
    </div>
  )
}

export default Products
