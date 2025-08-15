import React from "react";
import ProfileCard from "./components/profilecard"; // Import the new component
import "./App.css";

function App() {
  const user1 = {
    name: "Zahid Hussain",
    title: "Cloud Architect",
    bio: "Designing scalable and resilient cloud infrastructure. Coffee-fueled.",
    imageUrl: "https://placehold.co/150x150/7c3aed/ffffff?text=bond",
  };

  const user2 = {
    name: "John Cena",
    title: "Data Scientist",
    bio: "Finding stories in data and building predictive models.",
    imageUrl: "https://placehold.co/150x150/db2777/ffffff?text=JC",
  };

  return (
    <div className="App">
      <h1>Meet the Team</h1>
      <div className="card-container">
        <ProfileCard
          name={user1.name}
          title={user1.title}
          bio={user1.bio}
          imageUrl={user1.imageUrl}
        />
        <ProfileCard
          name={user2.name}
          title={user2.title}
          bio={user2.bio}
          imageUrl={user2.imageUrl}
        />
      </div>
    </div>
  );
}

export default App;
