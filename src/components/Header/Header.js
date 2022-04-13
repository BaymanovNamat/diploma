import "./Header.css";
import headerImage from "../../assets/header.jpg";
function Header() {

  const styles = {
    backgroundImage: `url(${headerImage})`,
  };

  return (

    <header className="Header" style={styles}>
      <div className="Header__container">
        <div className="container__hollow">
          
        </div>
        
        <h2>
          All for your comfortable!
        </h2>
        <p>
          We try for you and <br/> we wish that you trust us and <br/> all this builds on the confidence!
        </p>
      </div>
    </header>
  );
}

export default Header;