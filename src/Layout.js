import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";
import Header from "./Header";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");
function Layout() {
  return (
    <header>
      <div className="links">
        <CustomLink to="/" className={setActive}>
          Home
        </CustomLink>
        <CustomLink to="/Users" className={setActive}>
          Users
        </CustomLink>
        <CustomLink to="/About" className={setActive}>
          About
        </CustomLink>
        <CustomLink to="/Postpage" className={setActive}>
          Posts
        </CustomLink>
      </div>

      <Header></Header>
      <Outlet />
    </header>
  );
}

export default Layout;
