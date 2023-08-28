import React from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  return (
    <div className="user-info">
      <h1>Edit User {id}</h1>
    </div>
  );
}

export default EditUser;
