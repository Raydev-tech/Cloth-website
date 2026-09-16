import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NewArrivals from "./pages/NewArrivals";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="min-h-screen bg-[#100805] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;