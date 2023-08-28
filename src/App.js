import { Routes, Route } from "react-router-dom";
import TodoMain from "./Todo/TodoMain";
import Users from "./pages/Users";
import About from "./pages/About";
import Singlepage from "./pages/Singlepage";
import React from "react";
import Notfoundpage from "./pages/Notfoundpage";
import Layout from "./Layout";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import Postpage from "./pages/Postpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<TodoMain></TodoMain>} />
          <Route path="Users" element={<Users></Users>} />
          <Route path="Users/:id" element={<Singlepage></Singlepage>} />
          <Route path="Users/new" element={<CreateUser></CreateUser>} />
          <Route path="Users/:id/edit" element={<EditUser></EditUser>} />
          <Route path="About" element={<About />}>
            <Route
              path="contacts"
              element={<p className=" contacts">Our contact</p>}
            />
            <Route
              path="team"
              element={<p className=" contacts">Our team</p>}
            />
          </Route>
          <Route path="Postpage" element={<Postpage></Postpage>} />
          <Route path="*" element={<Notfoundpage></Notfoundpage>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
