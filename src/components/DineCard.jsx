import React from 'react';
import { Link } from 'react-router-dom';

function DineCard({ data }) {
  const {
    name,
    rating,
    cuisines,
    costForTwo,
    locationInfo,
    vendorHighlights,
    offerInfoV3,
    customerOffer,
    id
  } = data?.info || {};

  return (
    <Link 
      to={`/restaurant/${id}`} 
      className="h-auto w-72 sm:w-80 md:w-82 flex-none rounded-xl mr-4 md:mr-5 shadow-lg  overflow-hidden relative "
    >
      {/* Restaurant Image with Gradient Overlay */}
      <div className="relative h-48 w-full">
        <img 
          className="h-full w-full object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.info?.mediaFiles[0]?.url}`} 
          alt={name || "Restaurant"} 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Restaurant Name and Rating */}
      <div className="absolute top-40 w-full px-3 flex justify-between items-start">
        <h2 className="text-white font-bold text-lg md:text-xl truncate max-w-[70%]">
          {name}
        </h2>
        <div className="flex items-center bg-black/70 px-2 py-1 rounded-full">
          <i className="ri-star-fill text-sm mr-1 text-yellow-300"></i>
          <span className="text-white text-sm font-bold">
            {rating?.value || '--'}
          </span>
        </div>
      </div>

      {/* Restaurant Details */}
      <div className="p-3 space-y-2">
        {/* Cuisine and Price */}
        <div className="flex justify-between text-sm text-gray-600">
          <p className="truncate max-w-[60%]">
            {cuisines?.join(', ') || 'Multiple cuisines'}
          </p>
          <p className="font-medium">{costForTwo || '₹500 for two'}</p>
        </div>

        {/* Location and Distance */}
        <div className="flex justify-between text-xs text-gray-500">
          <p className="truncate max-w-[60%]">
            {locationInfo?.formattedAddress || 'City location'}
          </p>
          <p>{locationInfo?.distanceString || '1 km'}</p>
        </div>

        {/* Highlights */}
        {vendorHighlights?.[0]?.title && (
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              {vendorHighlights[0].title}
            </span>
          </div>
        )}

        {/* Offers */}
        {offerInfoV3?.vendorOffer && (
          <div className="mt-2 p-2 rounded-lg bg-green-600 text-white text-xs flex items-center">
            {offerInfoV3?.offerLogo?.logo && (
              <img 
                className="h-4 mr-2 object-contain" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${offerInfoV3.offerLogo.logo}`} 
                alt="Offer"
              />
            )}
            <div className="flex-1">
              <p className="font-bold">
                {offerInfoV3.vendorOffer.title} {offerInfoV3.vendorOffer.subtitle}
              </p>
              <p className="text-xs opacity-90">{offerInfoV3.vendorOffer.subtext}</p>
            </div>
          </div>
        )}

        {/* Customer Offer */}
        {customerOffer?.infos?.[0]?.description && (
          <div className="p-2 rounded-lg bg-green-100 text-green-700 text-xs">
            <p>{customerOffer.infos[0].description}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default DineCard;