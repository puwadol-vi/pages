import React from "react";
import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
];

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get user ID from URL
  const user = users.find((u) => u.id.toString() === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserPage;
