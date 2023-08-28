import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Singlepage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div className="user-info">
      {user && (
        <>
          <h1>User-FullName: {user.title}</h1>
          <p>User-ID: {user.id}</p>
          <Link to={`/users/${id}/edit`}>Edit this user</Link>
        </>
      )}
    </div>
  );
};

export default Singlepage;
