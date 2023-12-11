import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AdminLayout from './components/layout/AdminLayout';
import RequireAuth from './components/layout/RequireAuth';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import AddProduct from './pages/admin/AddProduct';
import Products from './pages/admin/Products';
import Unauthorized from './pages/Unauthorized';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/:name/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />

          <Route element={<RequireAuth allowedRole={'user'} />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>

        <Route element={<AdminLayout />}>
          <Route element={<RequireAuth allowedRole={'admin'} />}>
            <Route path="/admin/product/add" element={<AddProduct />} />
            <Route path="/admin/products" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
