import { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async (id = "") => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(id ? `${API}/${id}` : API);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = userId.trim();
    fetchUsers(trimmed);
  };

  return (
    <section>
      <h1>Users</h1>

      <form
        onSubmit={onSubmit}
        style={{ display: "flex", gap: 8, marginBottom: 12 }}
      >
        <input
          placeholder="Enter user id (1-10) or leave blank"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setUserId("");
            fetchUsers("");
          }}
        >
          Show All
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p role="alert">Error: {error}</p>}

      <div className="grid">
        {users.map((u) => (
          <div key={u.id} className="card">
            <h3>{u.name}</h3>
            <p>
              <strong>Username:</strong> {u.username}
            </p>
            <p>
              <strong>Email:</strong> {u.email}
            </p>
            <p>
              <strong>Company:</strong> {u.company?.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
