import headerImage from "../assets/notfound.jpg";
import Header from "../components/Header/Header";


function NotFound() {
  return ( 
    <>
      <Header title={"This page is not found!"} image={headerImage}>
        Maybe page you are looking for was moved or deleted!
      </Header>
    </>
  );
}

export default NotFound;