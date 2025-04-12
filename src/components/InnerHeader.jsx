import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function InnerHeader() {
  const cart = useSelector(state => state.cartSlice.count);
  
  return (
    <div className='w-full flex justify-between items-center py-3 px-4 md:px-8 lg:px-12 shadow-md bg-white sticky top-0 z-50'>
      {/* Logo */}
      <div className='flex-shrink-0 mr-4 md:mr-8 lg:mr-12'>
        <Link to="/">
          <img 
            className='w-10 h-10 md:w-12 md:h-12 rounded-lg hover:opacity-90 transition-opacity' 
            src="https://imgs.search.brave.com/s5H86nWuVDniko20a2f1Zn3WIUaH5SgU46sDE11WWU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bG9nby5kZXYvc3dp/Z2d5LmNvbT90b2tl/bj1wa19WQVo2dHZB/VlFIQ0R3S2VhTlJW/eWpR" 
            alt="Swiggy Logo" 
          />
        </Link>
      </div>

      {/* Navigation Links - Hidden on mobile */}
      <div className='hidden md:flex items-center gap-4 lg:gap-8 font-medium text-sm lg:text-base'>
        <Link to="/corporate" className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-suitcase-line"></i>
          <span>Swiggy Corporate</span>
        </Link>
        <Link to="/search" className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-search-line"></i>
          <span>Search</span>
        </Link>
        <Link to="/offers" className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-discount-percent-line"></i>
          <span>Offers</span>
        </Link>
        <Link to="/help" className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-hand-line"></i>
          <span>Help</span>
        </Link>
        <Link to="/signin" className='flex items-center gap-1 hover:text-orange-500 transition-colors'>
          <i className="ri-user-3-line"></i>
          <span>Sign In</span>
        </Link>
        <Link to="/checkout" className='flex items-center gap-1 hover:text-orange-500 transition-colors relative'>
          <i className="ri-shopping-cart-line"></i>
          <span>Cart</span>
          {cart > 0 && (
            <span className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
              {cart}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu - Visible only on mobile */}
      <div className='flex md:hidden items-center gap-4'>
        <Link to="/search" className='text-gray-700 hover:text-orange-500'>
          <i className="ri-search-line text-xl"></i>
        </Link>
        <Link to="/checkout" className='text-gray-700 hover:text-orange-500 relative'>
          <i className="ri-shopping-cart-line text-xl"></i>
          {cart > 0 && (
            <span className='absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
              {cart}
            </span>
          )}
        </Link>
        <button className='text-gray-700 hover:text-orange-500'>
          <i className="ri-menu-line text-xl"></i>
        </button>
      </div>
    </div>
  );
}

export default InnerHeader;