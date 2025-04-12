import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import RestOption from './components/RestOption.jsx';
import ResturantMenu from './components/ResturantMenu.jsx';
import SrearchBox from './components/SearchBox.jsx';
import { Provider } from 'react-redux';
import store from './components/Store/Store.jsx';
import CheckOut from './components/CheckOut.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <Provider store={store} >
   <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='restaurant' element={<RestOption/>}/>
      <Route path='city/delhi/:id' element={<ResturantMenu/>}/>
      <Route path='city/delhi/:id/search' element={<SrearchBox/>}/>
      <Route path='checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
   </Provider>
    </BrowserRouter>
  </StrictMode>,
)
