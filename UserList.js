import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Riya", role: "Frontend Developer" },
    { id: 2, name: "John", role: "Backend Developer" },
    { id: 3, name: "Sara", role: "UI/UX Designer" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>👥 User List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ margin: "10px" }}>
            <Link
              to={`/user/${user.id}`}
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>Click on a user name to view their details 👇</p>
    </div>
  );
};

export default UserList;
