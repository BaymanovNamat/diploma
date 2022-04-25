import Header from "../components/Header/Header";
import headerImage from "../assets/faq.jpg";
function Faq(props) {
  return (

    <>
      <Header title={"Hi there"} image={headerImage}>
        <p>
          This is new site about phones and we sell at good prices.
        </p>
          <p>
            If arise problems you can contact by phone: +996 709 26 67 29
        </p>
      </Header>
    </>

  );
};


export default Faq;