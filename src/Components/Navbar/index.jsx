import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = "underline underline-offset-4 font-semibold";
  return (
    <nav className="top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <div className="flex justify-center">
        <ul className="flex items-center gap-3">
        <li className="text-xl">
            <NavLink
              to="/cartelera"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Películas en Cartelera
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Populares
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/upcoming"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Próximos Estrenos
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/mejor-calificada"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Destacadas
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
