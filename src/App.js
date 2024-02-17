import { Outlet, Route, Routes, Link } from "react-router-dom";

import FooterBottom from "./components/home/FooterBottom";
import Header from "./components/home/Header";

import About from "./pages/About";

import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import Payment from "./pages/Payment";
import ProductDetails from "./pages/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Layout = () => {
  const products = useSelector((state) => state.cartReducer.products);
  return (
    <div className="relative">
      <Header />

      <Outlet />
      <div className="sticky inline-block  right-0 bottom-1/3 left-full z-10 bg-green-800/[0.9] p-10 rounded-full border-black border-2 ">
        <Link to="/cart">
          <div className="relative">
            <FaShoppingCart size={40} className="text-white " />
            <span className="absolute font-titleFont top-0 -right-2 text-sm w-5 h-5 flex items-center justify-center rounded-full bg-primeColor text-orange-600">
              {products.length > 0 ? products.length : 0}
            </span>
          </div>
        </Link>
      </div>
      <FooterBottom />
    </div>
  );
};

function App() {
  return (
    <div className="font-bodyFont">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="product/:_id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="paymentgateway" element={<Payment />} />
          <Route
            path="*"
            element={
              <h1 className="font-extrabold text-xl text-center p-16">
                Not Found
              </h1>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
