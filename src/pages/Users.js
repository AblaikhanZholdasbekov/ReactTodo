import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos ")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const styles = {
    Link: {
      color: "white",
    },
  };

  return (
    <div className="users">
      <h1>Our Users</h1>
      {users.map((user) => (
        <Link key={user.id} to={`/Users/${user.id}`} style={styles.Link}>
          <li>{user.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default Users;
