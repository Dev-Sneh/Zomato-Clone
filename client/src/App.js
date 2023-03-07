import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from './Pages/Home.page';
import Restaurant from './Pages/Restaurant.page';
import Checkout from './Pages/Checkout.page';
import GoogleAuth from './Pages/GoogleAuth.page';
//components
import Overview from './Components/Restaurant/Overview.component';
import OrderOnline from './Components/Restaurant/OrderOnline.component';
import Reviews from './Components/Restaurant/Reviews.component';
import Photos from './Components/Restaurant/Photos.component';
import Menu from './Components/Restaurant/Menu.component';
import RestaurantLayout from './Layouts/Restaurant.layout';

// redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./Redux/Reducers/user/user.action";
import { useEffect } from 'react';
import { getCart } from './Redux/Reducers/cart/cart.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
    dispatch(getCart())
  }, [localStorage]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/delivery" />} />
        <Route path='/:type' element={<Home />} />
        <Route path='/google/:token' element={<GoogleAuth />} />
        <Route path="/restaurant/:id" element={<RestaurantLayout><Restaurant /></RestaurantLayout>}>
          <Route path="menu" element={<Menu />} />
          <Route path="photos" element={<Photos />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="overview" element={<Overview />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/checkout/orders" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
