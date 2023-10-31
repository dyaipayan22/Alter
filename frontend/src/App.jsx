import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layout/UserLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import RequireAuth from './components/layout/RequireAuth';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/:name/:productId" element={<ProductDetails />} />

          <Route element={<RequireAuth />}>
            <Route path="about" element={<About />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
