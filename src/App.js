import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Allandroid from "./pages/Allandroid";
import Alliphones from "./pages/Alliphones";
import Faq from "./pages/Faq";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <div className="App">
      < Nav/>

      <Header/>

      <Mainpage/>
      <Allandroid/>
      <Alliphones/>
      <Faq/>


      <Footer/>
    </div>
  );
}

export default App;
