import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroImg from "./components/HeroImg/HeroImg";
import NewProduct from "./components/NewProduct/NewProduct";
import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Header />
      <NewProduct />
      <HeroImg /> */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
