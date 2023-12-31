import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div className="About-us">
      <h1>About us</h1>
      <p>This is a demo website about React-router-dom library.</p>
      <ul>
        <li>
          <Link to="contacts" className="contacts">
            Our Contacts
          </Link>
        </li>
        <li>
          <Link to="team" className=" contacts">
            Our Team
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default About;
