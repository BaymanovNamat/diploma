import "./Header.css";
function Header({image, title, children}) {

  return (

    <header className="Header">
      <img src={image}/>
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