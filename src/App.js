import { Outlet, Route, Navigate, Routes } from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";

import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import { useState } from "react";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />

      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

//const router = createBrowserRouter();

function App() {
  const [user, setUser] = useState(true);
  const RequireAuth = ({ children }) => {
    return <>{user ? <> {children}</> : <Navigate to="signin"></Navigate>}</>;
  };

  return (
    <div className="font-bodyFont">
      {/* <RouterProvider router={router} /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="shop"
            element={
              <RequireAuth>
                <Shop />
              </RequireAuth>
            }
          />
          <Route
            path="about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          <Route
            path="contact"
            element={
              <RequireAuth>
                <Contact />
              </RequireAuth>
            }
          />

          <Route
            path="offer"
            element={
              <RequireAuth>
                <Offer />
              </RequireAuth>
            }
          />
          <Route
            path="product/:_id"
            element={
              <RequireAuth>
                <ProductDetails />
              </RequireAuth>
            }
          />
          <Route
            path="cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          <Route
            path="paymentgateway"
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="signup" element={<SignUp setUser={setUser} />} />
        <Route path="signin" element={<SignIn setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
