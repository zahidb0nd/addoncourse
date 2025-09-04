import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams()

  return (
    <div>
      <section>
        <h1>Product Details</h1>
        <p>
          You Clicked Product Number : <strong>{id}</strong>
        </p>
      </section>
    </div>
  )
}

export default ProductDetails
