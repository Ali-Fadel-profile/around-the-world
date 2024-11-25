import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center justify-center gap-3 font-semibold"
    >
      <img src={logo} alt="" />
      around the world
    </Link>
  );
}

export default Logo;
