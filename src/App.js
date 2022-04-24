import { Route, Routes } from "react-router-dom";
import Allandroid from "./pages/Allandroid";
import Alliphones from "./pages/Alliphones";
import Faq from "./pages/Faq";
import Mainpage from "./pages/Mainpage";
import "./App.css";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <div className="App">
      
      <Layout>
        <Routes>

          <Route path="/" element={<Mainpage/>}/>
          <Route path="/allandroid" element= {<Allandroid/>}/>
          <Route path="alliphones" element={<Alliphones/>}/>
          <Route path="faq" element={<Faq/>}/>

        </Routes>

      </Layout>


    </div>
  );
}

export default App;
