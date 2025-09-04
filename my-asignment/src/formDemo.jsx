import { useState } from "react";

export default function FormDemo() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ username: "", roll: "" });
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(null);

  const handleApply = () => setShowForm(true);
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(form); // Q2: store in state variable
    setSubmitted(true); // Q3: success message
  };

  return (
    <section>
      <h1>Application</h1>

      {!showForm && (
        <div>
          <p>Click below to start your application.</p>
          <button className="btn" onClick={handleApply}>
            Apply Now
          </button>
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
          <h3>Application Form</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              maxWidth: 340,
            }}
          >
            <label>
              Username
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Roll Number
              <input
                name="roll"
                value={form.roll}
                onChange={handleChange}
                required
              />
            </label>
            <button className="btn" type="submit">
              Submit Now
            </button>
          </div>
        </form>
      )}

      {submitted && (
        <p style={{ marginTop: 12 }}>Form Submitted Successfully</p>
      )}

      {saved && (
        <div style={{ marginTop: 12 }}>
          <h4>Saved State</h4>
          <pre className="card">{JSON.stringify(saved, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}
