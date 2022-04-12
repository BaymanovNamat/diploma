import Logo from "../ui/Logo/Logo";
import "./Nav.css";
import Navitem from "./Navitem/Navitem";


function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <Logo/>
        <ul>
          <Navitem url="/">
            Main page
          </Navitem>
          <Navitem url="/">
            All about Androids
          </Navitem>
          <Navitem url="/">
            All about Iphones
          </Navitem>
          <Navitem url="/">
            FAQ about this website 
          </Navitem>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;