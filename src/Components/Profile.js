import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
    </div>
  );
}

export default Profile;
