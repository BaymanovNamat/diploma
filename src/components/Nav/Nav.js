import Logo from "../ui/Logo/Logo";
import "./Nav.css";


function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <Logo/>
        <ul>
          <li>
            <a href="/">
              Main page
            </a>
          </li>
          <li>
            <a href="/">
              All about Androids
            </a>
          </li>
          <li>
            <a href="/">
              All about Iphones
            </a>
          </li>
          <li>
            <a href="/">
            FAQ about this website
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;