import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = "underline underline-offset-4 font-semibold ";
  return (
    <nav className="top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
      <div className="flex justify-center">
        <ul className="flex items-center gap-3">
          <li className="text-lg">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              to="/genero"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Genero
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              to="/idioma"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Idioma
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              to="/puntaje"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Puntaje
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
