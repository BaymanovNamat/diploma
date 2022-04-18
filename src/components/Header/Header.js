import "./Header.css";
function Header() {

  const styles = {
    // backgroundImage: `url(${headerImage})`,
  };

  return (

    <header className="Header" style={styles}>
      <div className="Header__container" >

        <div className="flex__container">


          <div className="content">
            <h2>
              All for your comfortable!
            </h2>
            <p>
              We try for you and we wish that you trust us and all this builds on the confidence!
            </p>
          </div>
        </div>


      </div>
    </header>
  );
}

export default Header;