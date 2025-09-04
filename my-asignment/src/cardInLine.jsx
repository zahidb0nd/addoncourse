export default function CardInline() {
  const card = {
    border: '1px solid #e5e7eb',
    borderRadius: '18px',
    padding: '16px',
    boxShadow: '0 2px 12px rgba(0,0,0,.06)',
    maxWidth: 360,
    background: '#fff',
  }
  const button = {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
  }
  return (
    <section>
      <h1>Card with Inline CSS</h1>
      <div style={card}>
        <h3>Inline Styled Card</h3>
        <p>This card is styled using a JS style object.</p>
        <button style={button}>Action</button>
      </div>
    </section>
  )
}
