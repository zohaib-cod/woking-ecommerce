



// // src/app/page.js (Updated Home Page with Add to Cart and Star Ratings)
// 'use client';

// import { useState } from 'react';
// import Head from 'next/head';
// import { useCart } from '@/context/CartContext';
// import StarRating from './components/StarRating';

// export default function HomePage() {
//   const [currentReview, setCurrentReview] = useState(0);
//   const [productRatings, setProductRatings] = useState({});
//   const { addToCart } = useCart();

//   const reviews = [
//     {
//       id: 1,
//       text: "This is an amazing store! The product quality is exceptional and delivery was super fast. Will definitely shop here again!",
//       name: "Sarah Johnson",
//       rating: 5,
//       icon: "💕"
//     },
//     {
//       id: 2,
//       text: "I've been shopping here for years. Always satisfied with their products and customer service. Highly recommended!",
//       name: "Michael Chen",
//       rating: 4,
//       icon: "👍"
//     },
//     {
//       id: 3,
//       text: "The website is easy to navigate and my order arrived sooner than expected. The product was exactly as described.",
//       name: "Emma Rodriguez",
//       rating: 5,
//       icon: "⭐"
//     },
//   ];

//   const products = [
//     { id: 1, name: "Wireless Headphones", price: 129.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
//     { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
//     { id: 3, name: "Running Shoes", price: 89.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
//     { id: 4, name: "Designer Sunglasses", price: 89.99, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
//     { id: 5, name: "Leather Handbag", price: 149.99, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
//     { id: 6, name: "Fitness Tracker", price: 79.99, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
//   ];

//   const services = [
//     {
//       icon: "🔄",
//       title: "7-Days Returns",
//       description: "Risk-free shopping with easy returns."
//     },
//     {
//       icon: "🚚",
//       title: "Free Shipping",
//       description: "No extra costs, just the price you see."
//     },
//     {
//       icon: "📞",
//       title: "24/7 Support",
//       description: "24/7 support, always here just for you."
//     },
//     {
//       icon: "🎁",
//       title: "Member Discounts",
//       description: "Special offers for our loyal customers."
//     }
//   ];

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     alert(`${product.name} added to cart!`);
//   };

//   const handleRatingChange = (productId, rating) => {
//     setProductRatings(prev => ({
//       ...prev,
//       [productId]: rating
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>ZohaibStore - Premium Online Store</title>
//         <meta name="description" content="ZohaibStore - Your one-stop shop for all your needs" />
//       </Head>

//       <main className="container mx-auto px-4 py-8">
//         {/* Featured Products Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
//           <a href="/shop" className="flex items-center text-green-600 font-semibold group">
//             View All
//             <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
//           </a>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//               <div className="overflow-hidden">
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//                 <p className="text-green-600 font-bold">${product.price}</p>
                
//                 {/* Star Rating */}
//                 <div className="my-3">
//                   <StarRating 
//                     rating={productRatings[product.id] || 0} 
//                     setRating={(rating) => handleRatingChange(product.id, rating)}
//                   />
//                 </div>
                
//                 <button 
//                   onClick={() => handleAddToCart(product)}
//                   className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Customer Reviews */}
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Reviews</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//           {reviews.map((review) => (
//             <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
//               <div className="text-3xl mb-4">{review.icon}</div>
//               <p className="text-gray-600 mb-4">{review.text}</p>
//               <div className="flex items-center">
//                 <div>
//                   <h4 className="font-semibold">{review.name}</h4>
//                   <StarRating rating={review.rating} editable={false} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Services */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="font-bold text-lg mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }





// src/app/page.js (Updated Home Page)
'use client';

import { useState } from 'react';
import { Star, Truck, Shield, RotateCcw, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);
  const [productRatings, setProductRatings] = useState({});
  const { addToCart } = useCart();

  const reviews = [
    {
      id: 1,
      text: "This is an amazing store! The product quality is exceptional and delivery was super fast. Will definitely shop here again!",
      name: "Sarah Johnson",
      rating: 5
    },
    {
      id: 2,
      text: "I've been shopping here for years. Always satisfied with their products and customer service. Highly recommended!",
      name: "Michael Chen",
      rating: 4
    },
    {
      id: 3,
      text: "The website is easy to navigate and my order arrived sooner than expected. The product was exactly as described.",
      name: "Emma Rodriguez",
      rating: 5
    },
  ];

  const products = [
    { id: 1, name: "Wireless Headphones", price: 129.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Running Shoes", price: 89.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Designer Sunglasses", price: 89.99, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  ];

  const services = [
    { icon: <RotateCcw size={24} />, title: "Easy Returns", description: "30-day hassle-free returns" },
    { icon: <Truck size={24} />, title: "Free Shipping", description: "On orders over $50" },
    { icon: <Shield size={24} />, title: "Secure Payment", description: "100% secure payment processing" },
    { icon: <Heart size={24} />, title: "Customer Support", description: "24/7 dedicated support" }
  ];

  const handleAddToCart = (product) => {
    addToCart(product, 'Standard', '#000000');
    alert(`${product.name} added to cart!`);
  };

  const handleRatingChange = (productId, rating) => {
    setProductRatings(prev => ({
      ...prev,
      [productId]: rating
    }));
  };

  const StarRating = ({ rating, setRating, editable = true }) => {
    const [hoverRating, setHoverRating] = useState(0);
  
    return (
      <div className="flex items-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => editable && setRating(star)}
            onMouseEnter={() => editable && setHoverRating(star)}
            onMouseLeave={() => editable && setHoverRating(0)}
            className={`text-lg ${
              star <= (hoverRating || rating)
                ? 'text-amber-400'
                : 'text-gray-300'
            } ${editable ? 'cursor-pointer' : 'cursor-default'}`}
            disabled={!editable}
          >
            <Star size={18} fill="currentColor" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 mt-4">
        {/* Featured Products Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Products</h2>
          <a href="/shop" className="flex items-center text-blue-600 font-medium group">
            View All
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
                <p className="text-blue-600 font-semibold">${product.price}</p>
                
                {/* Star Rating */}
                <div className="my-3">
                  <StarRating 
                    rating={productRatings[product.id] || 0} 
                    setRating={(rating) => handleRatingChange(product.id, rating)}
                  />
                </div>
                
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Customer Reviews */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4">
                <StarRating rating={review.rating} editable={false} />
              </div>
              <p className="text-gray-600 mb-4 text-sm">"{review.text}"</p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-medium text-gray-800">{review.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}