import "./Header.css";
function Header({image, title, children}) {

  return (

    <header className="Header">
      <img src={image} alt="#"/>
      <section>
        <h2>
          {title}
        </h2>
        <p>
          {children}
        </p>
      </section>
    </header>
  );
}

export default Header;