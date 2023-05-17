import Home from "./pages/index";
import About from "./pages/About";
import Document from "./pages/Documentation";
import ContactUs from "./pages/ContactUs";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" type="" href="" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Documentation" element={<Document />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
