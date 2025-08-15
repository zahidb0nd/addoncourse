import React from "react";
import "./ProfileCard.css"; // Import component-specific styles

function ProfileCard({ name, title, bio, imageUrl }) {
  return (
    <div className="profile-card">
      <img
        src={imageUrl}
        alt={`${name}'s avatar`}
        className="profile-avatar"
        // Provides a fallback image if the URL is broken
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/150x150/a9a2f6/ffffff?text=User";
        }}
      />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
