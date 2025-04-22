import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { Link } from 'react-router-dom';

function CheckOut() {
    const cart = useSelector(state => state.cartSlice.items);
    const total = cart.reduce((sum, item) => sum + (item.price/100 * (item.quantity || 1)), 0);

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-sky-500">Your Cart</h1>
                    <Link 
                        to="/" 
                        className="text-sm md:text-base text-sky-500 hover:text-sky-600 transition-colors flex items-center gap-1"
                    >
                        <i className="ri-arrow-left-line"></i> Continue Shopping
                    </Link>
                </div>

                {/* Cart Items */}
                {cart.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <Card key={item.id} data={item} isCartItem={true} />
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
                            
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">₹{total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Delivery Fee</span>
                                    <span className="font-medium">₹{total > 500 ? 'Free' : '50.00'}</span>
                                </div>
                                <div className="flex justify-between border-t pt-3">
                                    <span className="text-gray-800 font-semibold">Total</span>
                                    <span className="text-lg font-bold text-sky-600">
                                        ₹{(total > 500 ? total : total + 50).toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                                Proceed to Checkout
                            </button>

                            <p className="text-xs text-gray-500 mt-3 text-center">
                                By placing your order, you agree to our Terms of Service
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                        <i className="ri-shopping-cart-line text-5xl text-gray-300 mb-4"></i>
                        <h2 className="text-xl font-medium text-gray-600 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet</p>
                        <Link 
                            to="/" 
                            className="inline-block bg-sky-500 hover:bg-sky-600 text-white py-2 px-6 rounded-md transition-colors"
                        >
                            Browse Restaurants
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CheckOut;