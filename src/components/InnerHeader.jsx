import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link, } from 'react-router-dom';
import {show,hide,showSign,hideSign} from './Slices/SearchSlice';
import SearchCard from './SearchCard';
import { NavLink } from 'react-router-dom';

function InnerHeader() {
  const cart = useSelector(state => state.cartSlice.count);
  const visible = useSelector(state=>state.searchSlice.visible)
  const sign = useSelector(state=>state.searchSlice.sign)
  const dispatch = useDispatch();
  const [searchData,setSearchData] = useState([])
  const [input,setInput] = useState('')
  
  function handleHide(){
    dispatch(hide())
  }

  function handleShow(){
    dispatch(show())
  }

  async function get() {
    const response = await fetch(`https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/place-autocomplete?input=`+(input));
    const data = await response.json();
    setSearchData(data?.data);
  }
  useEffect(()=>{
    get();
  },[input])

 function fill(e){
  setInput(e.target.value)
 }

 function handleShowSign(){
   dispatch(showSign())
 }
 function handleSignHide(){
  dispatch(hideSign());
 }


  return (
    <>
    <div className={`w-full h-full z-60 absolute overflow-hidden  bg-black/50 ${visible?'visible':'invisible'}`}>
    <div className={`w-full md:w-[570px] h-full pl-3 md:pl-40 pt-8 duration-500 absolute bg-white ${visible?'left-0':'-left-[580px]'} `}>
      <h2 onClick={()=>handleHide()} className={`font-bold cursor-pointer text-lg mb-6 tracking-tight`}>close</h2>
      <input onChange={fill} className='shadow w-88 h-14 pl-3 font-bold mb-10 border border-gray-300 focus:outline-0' type="text" placeholder='Search for area, street name..' value={input} />
      <div>
        {
          searchData?.map((item)=><SearchCard key={item?.place_id} data={item}/>)
        }
      </div>
    </div>
    </div>
    <div className={`w-full h-full z-60 absolute overflow-hidden  bg-black/50 ${sign?'visible':'invisible'}`}>
    <div className={`w-full md:w-[570px] h-full pl-3 md:pl-40 pt-8 duration-500 absolute bg-white ${sign?'right-0':'-right-[580px]'} `}>
     <div className='w-[370px] flex flex-col gap-2'>
     <h2 onClick={()=>handleSignHide()} className={`font-bold cursor-pointer text-lg mb-6 tracking-tight`}>close</h2>
      <div className='flex justify-between mb-6'>
        <h2 className='font-bold text-3xl pt-3 text-orange-500'>Login</h2>
        <img className='w-26 h-26' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
      </div>
      <input className='border border-gray-400 h-16 pl-3 w-full mb-6' type="text" placeholder='Phone number'/>
      <button className='bg-orange-600 w-full h-14 text-white font-bold hover:cursor-pointer'>LOGIN</button>
      <p className='font-bold text-sm text-gray-600 text-[12px] tracking-tight]'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
     </div>
    </div>
    </div>
    <div className='w-full flex justify-between items-center py-3 px-4 md:px-8 lg:px-10 shadow-md bg-white sticky top-0 z-50'>
      {/* Logo */}
      <div className='flex items-center gap-12 flex-shrink-0 lg:pl-36  mr-4 md:mr-8 lg:mr-12'>
        <Link to="/">
          <img 
            className='w-10 h-10 md:w-12 md:h-12 rounded-lg hover:opacity-90 transition-opacity' 
            src="https://imgs.search.brave.com/s5H86nWuVDniko20a2f1Zn3WIUaH5SgU46sDE11WWU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bG9nby5kZXYvc3dp/Z2d5LmNvbT90b2tl/bj1wa19WQVo2dHZB/VlFIQ0R3S2VhTlJW/eWpR" 
            alt="Swiggy Logo" 
          />
        </Link>
        <div onClick={()=>handleShow()} className='flex items-center hover:cursor-pointer hover:text-orange-600'>
          <p className='text-sm border-b-2 font-bold mr-4'>Other</p>
          <i className="ri-arrow-down-s-line text-orange-600 text-2xl"></i>
        </div>
      </div>

      {/* Navigation Links - Hidden on mobile */}
      <div className='hidden md:flex lg:pr-36 items-center gap-4 lg:gap-8 font-medium text-sm lg:text-base'>
        <NavLink to="/corporate" className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-suitcase-line"></i>
          <span>Swiggy Corporate</span>
        </NavLink>
        <NavLink to="/search" className={({isActive})=>`flex items-center gap-1 hover:text-orange-500 transition-colors ${isActive?'text-orange-500':''}`}>
          <i className="ri-search-line"></i>
          <span>Search</span>
        </NavLink>
        <NavLink to="/offers" className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-discount-percent-line"></i>
          <span>Offers</span>
        </NavLink>
        <NavLink to="/help" className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-hand-line"></i>
          <span>Help</span>
        </NavLink>
        <NavLink onClick={handleShowSign} className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-user-3-line"></i>
          <span>Sign In</span>
        </NavLink>
        <NavLink to="/checkout" className='flex items-center gap-1 hover:text-orange-500 transition-colors relative'>
          <i className="ri-shopping-cart-line"></i>
          <span>Cart</span>
          {cart > 0 && (
            <span className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
              {cart}
            </span>
          )}
        </NavLink>
      </div>

      {/* Mobile Menu - Visible only on mobile */}
      <div className='flex md:hidden items-center gap-4'>
      <NavLink to="/search" className={({isActive})=>`text-gray-700 hover:text-orange-500 relative ${isActive?'text-orange-500':''}`}>
          <i className="ri-search-line"></i>
        </NavLink>
        <NavLink to="/checkout" className={({isActive})=>`text-gray-700 hover:text-orange-500 relative ${isActive?'text-orange-500':''}`}>
          <i className="ri-shopping-cart-line text-xl"></i>
          {cart > 0 && (
            <span className='absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
              {cart}
            </span>
          )}
        </NavLink>
        <Link onClick={handleShowSign} className='text-gray-700 hover:text-orange-500 relative'>
          <i className="ri-user-3-line"></i>
        </Link>
      </div>
    </div>
    </>
  );
}

export default InnerHeader;