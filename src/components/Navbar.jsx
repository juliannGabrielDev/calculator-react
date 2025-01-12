import { Link, useLocation } from "react-router-dom";
import { navigation } from "../constants";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="p-2 lg:p-5">
      <ul className="bg-white flex gap-1 justify-center text-md w-fit mx-auto p-2 rounded-2xl transition-shadow duration-300 lg:hover:shadow-md lg:hover:shadow-lime-400/50">
        {navigation.map(({ id, path, title }) => (
          <li
            key={id}
            className={`px-2 py-1 rounded-2xl active:scale-90 transition-transform duration-300 ${
              location.pathname === path ? "bg-lime-400" : "bg-lime-50"
            }`}
          >
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
