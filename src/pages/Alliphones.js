import Header from "../components/Header/Header";
import headerImage from "../assets/iphone.jpg";
function Alliphones(props) {
  return (
    <>
      <Header title={"The best iPhones"} image={headerImage}>
        <ul>
          <li>
            iphone 13 Pro
          </li>
          <li>
            iphone 13
          </li>
          <li>
            iphone SE
          </li>
          <li>
            iphone 12
          </li>
          <li>
            iphone xs
          </li>
          <li>
            iphone 13 pro max
          </li>
        </ul>
      </Header>
    </>
  );
};


export default Alliphones;