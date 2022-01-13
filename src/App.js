import Home from "./Home";
import Contact from "./Components/Contact/Contact.js";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Error from "./Components/Error/Error";
import Message from "./Message"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Message" element={<Message />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
