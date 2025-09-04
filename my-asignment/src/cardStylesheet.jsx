import './styles/card.css'

export default function CardStylesheet() {
  return (
    <section>
      <h1>Card with Stylesheet</h1>
      <div className="card-sheet">
        <h3>Stylesheet Card</h3>
        <p>This card is styled using an external CSS file.</p>
        <button className="card-btn">Action</button>
      </div>
    </section>
  )
}
