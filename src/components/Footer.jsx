import React from "react";

function Footer() {
  return (
    <div className="bg-[#F0F0F5] pt-8 pb-8 md:pt-12 md:pb-12 mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pb-8 border-b-2 border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            <img 
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" 
              alt="Swiggy Logo" 
              className="w-40 h-auto"
            />
            <p className="text-sm text-gray-600">&copy;2025 Swiggy Limited</p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-black mb-2">Company</h2>
            {['About Us', 'Swiggy Corporate', 'Careers', 'Team', 'Swiggy One', 'Swiggy Instamart', 'Swiggy Dineout', 'Swiggy Genie', 'Minis', 'Pyng'].map((item) => (
              <a href="#" key={item} className="text-sm md:text-base text-gray-600 hover:text-orange-500 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Contact & Legal */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-black mb-2">Contact us</h2>
              {['Help & Support', 'Partner with us', 'Ride with us'].map((item) => (
                <a href="#" key={item} className="text-sm md:text-base text-gray-600 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-black mb-2">Legal</h2>
              {['Terms & Conditions', 'Cookie Policy', 'Privacy Policy'].map((item) => (
                <a href="#" key={item} className="text-sm md:text-base text-gray-600 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Available Cities */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-black mb-2">Available in:</h2>
            {['Bangalore', 'Hyderabad', 'Delhi', 'Mumbai', 'Pune', 'Gurgaon'].map((city) => (
              <a href="#" key={city} className="text-sm md:text-base text-gray-600 hover:text-orange-500 transition-colors">
                {city}
              </a>
            ))}
          </div>

          {/* Life at Swiggy & Social */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-black mb-2">Life at Swiggy</h2>
              {['Explore with Swiggy', 'Swiggy News', 'Snackables'].map((item) => (
                <a href="#" key={item} className="text-sm md:text-base text-gray-600 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-black mb-2">Social Links</h2>
              <div className="flex gap-4 text-2xl text-gray-600">
                {['ri-linkedin-box-fill', 'ri-instagram-line', 'ri-facebook-fill', 'ri-pinterest-fill', 'ri-twitter-fill'].map((icon) => (
                  <a href="#" key={icon} className="hover:text-orange-500 transition-colors">
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center md:text-left">
            For better experience, download the Swiggy app now
          </h2>
          <div className="flex gap-4">
            <a href="#" className="hover:scale-105 transition-transform">
              <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" 
                alt="Download on App Store" 
                className="w-40 md:w-50 h-auto"
              />
            </a>
            <a href="#" className="hover:scale-105 transition-transform">
              <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" 
                alt="Get it on Google Play" 
                className="w-40 md:w-50 h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;