import "./Header.css";
import headerImage from "../../assets/header.jpg";
function Header() {

  const styles = {
    backgroundImage: `url(${headerImage})`,
  };

  return (

    <header className="Header" style={styles}>
      <div className="containers">
        <div className="containers__hollow">
          
        </div>
        
        <h2>
          All for your comfortable!
        </h2>
        <p>
          We try for you and we wish that you trust us and all this builds on the confidence!
        </p>
      </div>
    </header>
  );
}

export default Header;