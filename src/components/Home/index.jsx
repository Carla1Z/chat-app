import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [id, setId] = useState(null);

  const handleChage = (event) => {
    setId(event.target.value);
  };
  return (
    <main>
      <h1>ChatApp</h1>
      <input type="text" placeholder="Write an id" onChange={handleChage} />
      <Link to={`/chat/${id}`}>
        <button>Go to chat</button>
      </Link>
    </main>
  );
};
