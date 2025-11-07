import React from "react";
import { useParams, Link } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams(); // Get the dynamic route parameter

  const users = [
    { id: 1, name: "Riya", role: "Frontend Developer", email: "riya@mail.com" },
    { id: 2, name: "John", role: "Backend Developer", email: "john@mail.com" },
    { id: 3, name: "kalix", role: "UI/UX Designer", email: "kalix@mail.com" },
  ];

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>❌ User Not Found</h3>
        <Link to="/">🔙 Go Back</Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>👤 User Details</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        🔙 Back to User List
      </Link>
    </div>
  );
};

export default UserDetail;
