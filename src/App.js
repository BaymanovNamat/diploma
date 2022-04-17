import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Allandroid from "./pages/Allandroid";
import Alliphones from "./pages/Alliphones";
import Faq from "./pages/Faq";
import Mainpage from "./pages/Mainpage";
import "./App.css";
function App() {
  return (
    <div className="App">
      < Nav/>

      <Header/>
      <div className="route__flex">
        <div className="route__container">
        <div className="route__content">
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/allandroid" element= {<Allandroid/>}/>
          <Route path="alliphones" element={<Alliphones/>}/>
          <Route path="faq" element={<Faq/>}/>
      </Routes>
        </div>
      </div>
      </div>


      <Footer/>
    </div>
  );
}

export default App;
