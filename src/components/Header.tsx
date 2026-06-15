import { Link } from "react-router-dom";
import logoImg from "/logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { GoPerson } from "react-icons/go";

function Header() {
  return (
    <>
      <nav className="header-container">
        <div className="left">
          <div className="logo">
            <Link to="/"><img src={logoImg} className="logo-image" alt="Logo image" /></Link>
          </div>
          <Link to="/"><h4>Studio Ghibli API</h4></Link>
        </div>

        <div className="right">
          <Link to="/"><GrHomeRounded className="header-icon" /></Link>
          <Link to="/login"><GoPerson className="header-icon" /></Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
