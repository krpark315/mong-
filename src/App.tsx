import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Perfume from './pages/Perfume';
import CustomerCenter from './pages/CustomerCenter';
import Login from './pages/Login';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import ReviewList from './pages/ReviewList';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="perfume" element={<Perfume />} />
            <Route path="support" element={<CustomerCenter />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="order/basket.html" element={<Cart />} />
            <Route path="product/review.html" element={<ReviewList />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}
