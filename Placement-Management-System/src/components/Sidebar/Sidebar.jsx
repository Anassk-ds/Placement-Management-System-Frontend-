import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <ul className="sidebar">
      <NavLink
        to="/Dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Dashboard</li>
      </NavLink>

      <NavLink
        to="/Register"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Student Registration</li>
      </NavLink>

      <NavLink
        to="/Student"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Students</li>
      </NavLink>

      <NavLink
        to="/Companies"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Companies</li>
      </NavLink>

      <NavLink
        to="/Placements"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Placements</li>
      </NavLink>

      <NavLink
        to="/Reports"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Reports</li>
      </NavLink>

      <NavLink
        to="/Settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Settings</li>
      </NavLink>

      <NavLink
        to="/Logout"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Logout</li>
      </NavLink>
    </ul>
  );
}

export default Sidebar;