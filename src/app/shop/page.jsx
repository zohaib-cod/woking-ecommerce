


// // // src/app/shop/page.jsx
// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Head from 'next/head';
// // import { useCart } from '@/context/CartContext';

// // // This component will only render on the client side to avoid hydration issues
// // const ClientOnly = ({ children }) => {
// //   const [isClient, setIsClient] = useState(false);
  
// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);
  
// //   return isClient ? children : null;
// // };

// // // Star Rating Component
// // function StarRating({ rating, setRating, editable = true }) {
// //   const [hoverRating, setHoverRating] = useState(0);

// //   return (
// //     <div className="flex items-center mt-2">
// //       {[1, 2, 3, 4, 5].map((star) => (
// //         <button
// //           key={star}
// //           type="button"
// //           onClick={() => editable && setRating(star)}
// //           onMouseEnter={() => editable && setHoverRating(star)}
// //           onMouseLeave={() => editable && setHoverRating(0)}
// //           className={`text-lg ${
// //             star <= (hoverRating || rating)
// //               ? 'text-yellow-500'
// //               : 'text-gray-300'
// //           } ${editable ? 'cursor-pointer' : 'cursor-default'}`}
// //           disabled={!editable}
// //         >
// //           ★
// //         </button>
// //       ))}
// //     </div>
// //   );
// // }

// // const ShopPage = () => {
// //   const router = useRouter();
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [priceRange, setPriceRange] = useState(100);
// //   const [sortOption, setSortOption] = useState('default');
// //   const [visibleProducts, setVisibleProducts] = useState(9);
// //   const [hoveredProduct, setHoveredProduct] = useState(null);
// //   const [selectedColors, setSelectedColors] = useState({});
// //   const [productRatings, setProductRatings] = useState({});
// //   const { addToCart } = useCart();

// //   // Sample product data with placeholder images
// //   const products = [
// //     { id: 1, name: 'Classic T-Shirt', price: 29.99, category: 't-shirts', colors: ['#ff0000', '#0000ff', '#00ff00'], image: 'https://via.placeholder.com/300x400/ff9999/ffffff?text=T-Shirt+1', hoverImage: 'https://via.placeholder.com/300x400/99ff99/000000?text=Hover+View' },
// //     { id: 2, name: 'Luxury Perfume', price: 59.99, category: 'perfume', colors: ['#ffd700', '#c0c0c0'], image: 'https://via.placeholder.com/300x400/9999ff/ffffff?text=Perfume+1', hoverImage: 'https://via.placeholder.com/300x400/ff99ff/000000?text=Hover+View' },
// //     { id: 3, name: 'Premium Hoodie', price: 49.99, category: 'hoodies', colors: ['#000000', '#808080', '#000080'], image: 'https://via.placeholder.com/300x400/cccccc/ffffff?text=Hoodie+1', hoverImage: 'https://via.placeholder.com/300x400/999999/000000?text=Hover+View' },
// //     { id: 4, name: 'Graphic T-Shirt', price: 34.99, category: 't-shirts', colors: ['#ffffff', '#000000'], image: 'https://via.placeholder.com/300x400/ffcc99/000000?text=T-Shirt+2', hoverImage: 'https://via.placeholder.com/300x400/ccffcc/000000?text=Hover+View' },
// //     { id: 5, name: 'Floral Perfume', price: 69.99, category: 'perfume', colors: ['#ffc0cb', '#800080'], image: 'https://via.placeholder.com/300x400/ff99cc/ffffff?text=Perfume+2', hoverImage: 'https://via.placeholder.com/300x400/cc99ff/000000?text=Hover+View' },
// //     { id: 6, name: 'Winter Hoodie', price: 54.99, category: 'hoodies', colors: ['#ff0000', '#008000'], image: 'https://via.placeholder.com/300x400/99ccff/000000?text=Hoodie+2', hoverImage: 'https://via.placeholder.com/300x400/ccccff/000000?text=Hover+View' },
// //     { id: 7, name: 'V-Neck T-Shirt', price: 24.99, category: 't-shirts', colors: ['#ee82ee', '#ffff00'], image: 'https://via.placeholder.com/300x400/ffff99/000000?text=T-Shirt+3', hoverImage: 'https://via.placeholder.com/300x400/ffccff/000000?text=Hover+View' },
// //     { id: 8, name: 'Summer Perfume', price: 45.99, category: 'perfume', colors: ['#0000ff', '#00ff00'], image: 'https://via.placeholder.com/300x400/99ff99/000000?text=Perfume+3', hoverImage: 'https://via.placeholder.com/300x400/ccffff/000000?text=Hover+View' },
// //     { id: 9, name: 'Pullover Hoodie', price: 64.99, category: 'hoodies', colors: ['#36454f', '#800020'], image: 'https://via.placeholder.com/300x400/cc9999/ffffff?text=Hoodie+3', hoverImage: 'https://via.placeholder.com/300x400/ffcccc/000000?text=Hover+View' },
// //     { id: 10, name: 'Premium T-Shirt', price: 39.99, category: 't-shirts', colors: ['#000080', '#800000'], image: 'https://via.placeholder.com/300x400/9999cc/ffffff?text=T-Shirt+4', hoverImage: 'https://via.placeholder.com/300x400/cccc99/000000?text=Hover+View' },
// //     { id: 11, name: 'Exotic Perfume', price: 79.99, category: 'perfume', colors: ['#ffbf00', '#654321'], image: 'https://via.placeholder.com/300x400/ffcc66/000000?text=Perfume+4', hoverImage: 'https://via.placeholder.com/300x400/ff9966/000000?text=Hover+View' },
// //     { id: 12, name: 'Fleece Hoodie', price: 59.99, category: 'hoodies', colors: ['#ffa500', '#008080'], image: 'https://via.placeholder.com/300x400/99cccc/000000?text=Hoodie+4', hoverImage: 'https://via.placeholder.com/300x400/66cccc/000000?text=Hover+View' },
// //   ];

// //   // Filter and sort products
// //   const filteredProducts = products
// //     .filter(product => 
// //       selectedCategory === 'all' || product.category === selectedCategory
// //     )
// //     .filter(product => product.price <= priceRange)
// //     .sort((a, b) => {
// //       if (sortOption === 'low-to-high') return a.price - b.price;
// //       if (sortOption === 'high-to-low') return b.price - a.price;
// //       return 0;
// //     })
// //     .slice(0, visibleProducts);

// //   // Handle color selection
// //   const handleColorSelect = (productId, color) => {
// //     setSelectedColors(prev => ({
// //       ...prev,
// //       [productId]: color
// //     }));
// //   };

// //   // Handle rating change
// //   const handleRatingChange = (productId, rating) => {
// //     setProductRatings(prev => ({
// //       ...prev,
// //       [productId]: rating
// //     }));
// //   };

// //   // Handle add to cart
// //   const handleAddToCart = (product) => {
// //     const selectedColor = selectedColors[product.id] || product.colors[0];
// //     addToCart(product, 'Standard', selectedColor);
// //     alert(`${product.name} added to cart!`);
// //   };

// //   // Load more products
// //   const loadMore = () => {
// //     setVisibleProducts(prev => prev + 9);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Head>
// //         <title>Shop - ZohaibStore</title>
// //         <meta name="description" content="Browse our amazing products" />
// //       </Head>

// //       {/* Navigation */}
// //       <nav className="bg-white shadow-md">
// //         <div className="container mx-auto px-4 py-3">
// //           <div className="flex justify-center space-x-10">
// //             <button 
// //               onClick={() => router.push('/')}
// //               className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
// //             >
// //               Home
// //             </button>
// //             <button className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
// //               Shop
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="container mx-auto px-4 py-8">
// //         <div className="flex flex-col md:flex-row">
// //           {/* Sidebar with filters */}
// //           <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
// //             <div className="bg-white p-6 rounded-lg shadow-md">
// //               <h2 className="text-lg font-semibold mb-4">Categories</h2>
// //               <div className="space-y-2">
// //                 {['all', 't-shirts', 'perfume', 'hoodies'].map(category => (
// //                   <button
// //                     key={category}
// //                     onClick={() => setSelectedCategory(category)}
// //                     className={`block w-full text-left px-3 py-2 rounded-md ${selectedCategory === category ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'}`}
// //                   >
// //                     {category.charAt(0).toUpperCase() + category.slice(1)}
// //                   </button>
// //                 ))}
// //               </div>

// //               <div className="mt-6">
// //                 <h2 className="text-lg font-semibold mb-2">Price Range</h2>
// //                 <ClientOnly>
// //                   <input 
// //                     type="range" 
// //                     min="0" 
// //                     max="100" 
// //                     value={priceRange} 
// //                     onChange={(e) => setPriceRange(Number(e.target.value))}
// //                     className="w-full"
// //                   />
// //                 </ClientOnly>
// //                 <div className="flex justify-between mt-2">
// //                   <span>$0</span>
// //                   <span>${priceRange}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Main content */}
// //           <div className="w-full md:w-3/4">
// //             {/* Sort options */}
// //             <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
// //               <div>
// //                 <span className="text-gray-600">Showing {filteredProducts.length} products</span>
// //               </div>
// //               <div className="flex items-center">
// //                 <label className="mr-2 text-gray-600">Sort by:</label>
// //                 <select 
// //                   value={sortOption}
// //                   onChange={(e) => setSortOption(e.target.value)}
// //                   className="border border-gray-300 rounded-md px-3 py-2"
// //                 >
// //                   <option value="default">Default</option>
// //                   <option value="low-to-high">Price: Low to High</option>
// //                   <option value="high-to-low">Price: High to Low</option>
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Product grid */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {filteredProducts.map(product => (
// //                 <div 
// //                   key={product.id} 
// //                   className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
// //                   onMouseEnter={() => setHoveredProduct(product.id)}
// //                   onMouseLeave={() => setHoveredProduct(null)}
// //                 >
// //                   <div className="relative h-60 overflow-hidden">
// //                     <img 
// //                       src={hoveredProduct === product.id ? product.hoverImage : product.image} 
// //                       alt={product.name}
// //                       className="w-full h-full object-cover transition-opacity duration-300"
// //                     />
// //                     <div className="absolute bottom-2 left-2 flex space-x-1">
// //                       {product.colors.map(color => (
// //                         <button
// //                           key={color}
// //                           onClick={() => handleColorSelect(product.id, color)}
// //                           className={`w-5 h-5 rounded-full border ${selectedColors[product.id] === color ? 'border-2 border-white ring-2 ring-blue-500' : 'border-gray-300'}`}
// //                           style={{ backgroundColor: color }}
// //                           aria-label={`Select color`}
// //                         />
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div className="p-4">
// //                     <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
// //                     <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                    
// //                     {/* Star Rating */}
// //                     <StarRating 
// //                       rating={productRatings[product.id] || 0} 
// //                       setRating={(rating) => handleRatingChange(product.id, rating)}
// //                     />
                    
// //                     {/* Add to Cart Button */}
// //                     <button 
// //                       onClick={() => handleAddToCart(product)}
// //                       className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
// //                     >
// //                       Add to Cart
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Load more button */}
// //             {visibleProducts < products.length && (
// //               <div className="mt-8 text-center">
// //                 <button 
// //                   onClick={loadMore}
// //                   className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
// //                 >
// //                   Load More
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShopPage;


// // src/app/shop/page.jsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Head from 'next/head';
// import { useCart } from '@/context/CartContext';
// import { Star, ChevronLeft, ChevronRight, X, ShoppingCart } from 'lucide-react';

// // This component will only render on the client side to avoid hydration issues
// const ClientOnly = ({ children }) => {
//   const [isClient, setIsClient] = useState(false);
  
//   useEffect(() => {
//     setIsClient(true);
//   }, []);
  
//   return isClient ? children : null;
// };

// // Star Rating Component
// function StarRating({ rating, setRating, editable = true }) {
//   const [hoverRating, setHoverRating] = useState(0);

//   return (
//     <div className="flex items-center mt-2">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <button
//           key={star}
//           type="button"
//           onClick={() => editable && setRating(star)}
//           onMouseEnter={() => editable && setHoverRating(star)}
//           onMouseLeave={() => editable && setHoverRating(0)}
//           className={`text-lg ${
//             star <= (hoverRating || rating)
//               ? 'text-amber-400'
//               : 'text-gray-300'
//           } ${editable ? 'cursor-pointer' : 'cursor-default'}`}
//           disabled={!editable}
//         >
//           <Star size={18} fill="currentColor" />
//         </button>
//       ))}
//     </div>
//   );
// }

// // Add to Cart Popup Component
// function AddToCartPopup({ product, isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-md w-full shadow-xl border border-white/30">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold text-gray-800">Added to Cart!</h3>
//           <button 
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X size={20} />
//           </button>
//         </div>
        
//         <div className="flex items-center space-x-4 mb-4">
//           <img 
//             src={product.image} 
//             alt={product.name}
//             className="w-16 h-16 object-cover rounded-lg"
//           />
//           <div>
//             <h4 className="font-medium text-gray-800">{product.name}</h4>
//             <p className="text-blue-600 font-semibold">${product.price.toFixed(2)}</p>
//           </div>
//         </div>
        
//         <div className="flex space-x-3">
//           <button 
//             onClick={onClose}
//             className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             Continue Shopping
//           </button>
//           <button 
//             onClick={() => window.location.href = '/cart'}
//             className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
//           >
//             <ShoppingCart size={16} className="mr-2" />
//             View Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const ShopPage = () => {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [priceRange, setPriceRange] = useState(100);
//   const [sortOption, setSortOption] = useState('default');
//   const [visibleProducts, setVisibleProducts] = useState(9);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [selectedColors, setSelectedColors] = useState({});
//   const [productRatings, setProductRatings] = useState({});
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { addToCart } = useCart();

//   // Sample product data with high-quality images
//   const products = [
//     { id: 1, name: 'Classic Cotton T-Shirt', price: 29.99, category: 't-shirts', colors: ['#ef4444', '#3b82f6', '#10b981'], image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//     { id: 2, name: 'Luxury Eau de Parfum', price: 59.99, category: 'perfume', colors: ['#f59e0b', '#9ca3af'], image: 'https://images.unsplash.com/photo-1592945403407-9de659572da6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1592945403407-9de659572da6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//     { id: 3, name: 'Premium Hoodie', price: 49.99, category: 'hoodies', colors: ['#000000', '#6b7280', '#1e40af'], image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//     { id: 4, name: 'Graphic Print T-Shirt', price: 34.99, category: 't-shirts', colors: ['#ffffff', '#000000'], image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//     { id: 5, name: 'Floral Perfume', price: 69.99, category: 'perfume', colors: ['#f472b6', '#7e22ce'], image: 'https://images.unsplash.com/photo-1595425970377-2f8ded7c7b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1595425970377-2f8ded7c7b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//     { id: 6, name: 'Winter Hoodie', price: 54.99, category: 'hoodies', colors: ['#dc2626', '#16a34a'], image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//     { id: 7, name: 'V-Neck T-Shirt', price: 24.99, category: 't-shirts', colors: ['#c084fc', '#eab308'], image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//     { id: 8, name: 'Summer Perfume', price: 45.99, category: 'perfume', colors: ['#60a5fa', '#22c55e'], image: 'https://images.unsplash.com/photo-1595425972667-7c0345aa5b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1595425972667-7c0345aa5b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//     { id: 9, name: 'Pullover Hoodie', price: 64.99, category: 'hoodies', colors: ['#374151', '#991b1b'], image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', hoverImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
//   ];

//   // Filter and sort products
//   const filteredProducts = products
//     .filter(product => 
//       selectedCategory === 'all' || product.category === selectedCategory
//     )
//     .filter(product => product.price <= priceRange)
//     .sort((a, b) => {
//       if (sortOption === 'low-to-high') return a.price - b.price;
//       if (sortOption === 'high-to-low') return b.price - a.price;
//       return 0;
//     })
//     .slice(0, visibleProducts);

//   // Handle color selection
//   const handleColorSelect = (productId, color) => {
//     setSelectedColors(prev => ({
//       ...prev,
//       [productId]: color
//     }));
//   };

//   // Handle rating change
//   const handleRatingChange = (productId, rating) => {
//     setProductRatings(prev => ({
//       ...prev,
//       [productId]: rating
//     }));
//   };

//   // Handle add to cart
//   const handleAddToCart = (product) => {
//     const selectedColor = selectedColors[product.id] || product.colors[0];
//     addToCart(product, 'Standard', selectedColor);
//     setSelectedProduct(product);
//     setShowPopup(true);
//   };

//   // Close popup
//   const handleClosePopup = () => {
//     setShowPopup(false);
//     setSelectedProduct(null);
//   };

//   // Load more products
//   const loadMore = () => {
//     setVisibleProducts(prev => prev + 9);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm">
//       <Head>
//         <title>Shop - ZohaibStore</title>
//         <meta name="description" content="Browse our amazing products" />
//       </Head>

//       {/* Navigation */}
//       <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex justify-center space-x-10">
//             <button 
//               onClick={() => router.push('/')}
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
//             >
//               Home
//             </button>
//             <button className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
//               Shop
//             </button>
//             <button 
//               onClick={() => router.push('/tshirt')}
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
//             >
//               T-Shirts
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row">
//           {/* Sidebar with filters */}
//           <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
//             <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/30">
//               <h2 className="text-lg font-semibold mb-4 text-gray-800">Categories</h2>
//               <div className="space-y-2">
//                 {['all', 't-shirts', 'perfume', 'hoodies'].map(category => (
//                   <button
//                     key={category}
//                     onClick={() => setSelectedCategory(category)}
//                     className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
//                       selectedCategory === category 
//                         ? 'bg-blue-100 text-blue-800' 
//                         : 'text-gray-700 hover:bg-gray-100/50'
//                     }`}
//                   >
//                     {category.charAt(0).toUpperCase() + category.slice(1)}
//                   </button>
//                 ))}
//               </div>

//               <div className="mt-6">
//                 <h2 className="text-lg font-semibold mb-2 text-gray-800">Price Range</h2>
//                 <ClientOnly>
//                   <input 
//                     type="range" 
//                     min="0" 
//                     max="100" 
//                     value={priceRange} 
//                     onChange={(e) => setPriceRange(Number(e.target.value))}
//                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                   />
//                 </ClientOnly>
//                 <div className="flex justify-between mt-2 text-sm text-gray-600">
//                   <span>$0</span>
//                   <span>${priceRange}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main content */}
//           <div className="w-full md:w-3/4">
//             {/* Sort options */}
//             <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/30 mb-6 flex justify-between items-center">
//               <div>
//                 <span className="text-gray-600">Showing {filteredProducts.length} products</span>
//               </div>
//               <div className="flex items-center">
//                 <label className="mr-2 text-gray-600">Sort by:</label>
//                 <select 
//                   value={sortOption}
//                   onChange={(e) => setSortOption(e.target.value)}
//                   className="bg-white/50 border border-gray-200/50 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                 >
//                   <option value="default">Default</option>
//                   <option value="low-to-high">Price: Low to High</option>
//                   <option value="high-to-low">Price: High to Low</option>
//                 </select>
//               </div>
//             </div>

//             {/* Product grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProducts.map(product => (
//                 <div 
//                   key={product.id} 
//                   className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-white/30 hover:-translate-y-1"
//                   onMouseEnter={() => setHoveredProduct(product.id)}
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   <div className="relative h-60 overflow-hidden">
//                     <img 
//                       src={hoveredProduct === product.id ? product.hoverImage : product.image} 
//                       alt={product.name}
//                       className="w-full h-full object-cover transition-opacity duration-300"
//                     />
//                     <div className="absolute bottom-2 left-2 flex space-x-1">
//                       {product.colors.map(color => (
//                         <button
//                           key={color}
//                           onClick={() => handleColorSelect(product.id, color)}
//                           className={`w-5 h-5 rounded-full border-2 transition-all ${
//                             selectedColors[product.id] === color 
//                               ? 'border-white ring-2 ring-blue-500 scale-110' 
//                               : 'border-gray-300 hover:scale-110'
//                           }`}
//                           style={{ backgroundColor: color }}
//                           aria-label={`Select color`}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
//                     <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                    
//                     {/* Star Rating */}
//                     <StarRating 
//                       rating={productRatings[product.id] || 0} 
//                       setRating={(rating) => handleRatingChange(product.id, rating)}
//                     />
                    
//                     {/* Add to Cart Button */}
//                     <button 
//                       onClick={() => handleAddToCart(product)}
//                       className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Load more button */}
//             {visibleProducts < products.length && (
//               <div className="mt-8 text-center">
//                 <button 
//                   onClick={loadMore}
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
//                 >
//                   Load More
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Add to Cart Popup */}
//       <AddToCartPopup 
//         product={selectedProduct} 
//         isOpen={showPopup} 
//         onClose={handleClosePopup} 
//       />
//     </div>
//   );
// };

// export default ShopPage;







// src/app/shop/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useCart } from '@/context/CartContext';
import { Star, X, ShoppingCart, Filter } from 'lucide-react';

// This component will only render on the client side to avoid hydration issues
const ClientOnly = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient ? children : null;
};

// Star Rating Component
function StarRating({ rating, setRating, editable = true }) {
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
}

// Add to Cart Popup Component
function AddToCartPopup({ product, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-md w-full shadow-xl border border-white/30">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Added to Cart!</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex items-center space-x-4 mb-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h4 className="font-medium text-gray-800">{product.name}</h4>
            <p className="text-blue-600 font-semibold">${product.price.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Continue Shopping
          </button>
          <button 
            onClick={() => window.location.href = '/cart'}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <ShoppingCart size={16} className="mr-2" />
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const ShopPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(100);
  const [sortOption, setSortOption] = useState('default');
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [productRatings, setProductRatings] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  // Sample product data with high-quality images
  const products = [
    { id: 1, name: 'Classic Cotton T-Shirt', price: 29.99, category: 't-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Luxury Eau de Parfum', price: 59.99, category: 'perfume', image: 'https://images.unsplash.com/photo-1592945403407-9de659572da6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Premium Hoodie', price: 49.99, category: 'hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Graphic Print T-Shirt', price: 34.99, category: 't-shirts', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'Floral Perfume', price: 69.99, category: 'perfume', image: 'https://images.unsplash.com/photo-1595425970377-2f8ded7c7b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 6, name: 'Winter Hoodie', price: 54.99, category: 'hoodies', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 7, name: 'V-Neck T-Shirt', price: 24.99, category: 't-shirts', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 8, name: 'Summer Perfume', price: 45.99, category: 'perfume', image: 'https://images.unsplash.com/photo-1595425972667-7c0345aa5b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 9, name: 'Pullover Hoodie', price: 64.99, category: 'hoodies', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 10, name: 'Casual T-Shirt', price: 22.99, category: 't-shirts', image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 11, name: 'Sporty Hoodie', price: 49.99, category: 'hoodies', image: 'https://images.unsplash.com/photo-1602817538384-6017f229d71e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 12, name: 'Elegant Perfume', price: 79.99, category: 'perfume', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      selectedCategory === 'all' || product.category === selectedCategory
    )
    .filter(product => product.price <= priceRange)
    .sort((a, b) => {
      if (sortOption === 'low-to-high') return a.price - b.price;
      if (sortOption === 'high-to-low') return b.price - a.price;
      return 0;
    })
    .slice(0, visibleProducts);

  // Handle rating change
  const handleRatingChange = (productId, rating) => {
    setProductRatings(prev => ({
      ...prev,
      [productId]: rating
    }));
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product, 'Standard', '#000000');
    setSelectedProduct(product);
    setShowPopup(true);
  };

  // Close popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  // Load more products
  const loadMore = () => {
    setVisibleProducts(prev => prev + 9);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm">
      <Head>
        <title>Shop - ZohaibStore</title>
        <meta name="description" content="Browse our amazing products" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center space-x-10">
            <button 
              onClick={() => router.push('/')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
            >
              Home
            </button>
            <button className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
              Shop
            </button>
            <button 
              onClick={() => router.push('/tshirt')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
            >
              T-Shirts
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar with filters - Desktop */}
          <div className="hidden md:block w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/30">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <Filter size={18} className="mr-2" />
                Filters
              </h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-gray-800">Categories</h3>
                <div className="space-y-2">
                  {['all', 't-shirts', 'perfume', 'hoodies'].map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'text-gray-700 hover:bg-gray-100/50'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2 text-gray-800">Price Range</h3>
                <ClientOnly>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={priceRange} 
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </ClientOnly>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>$0</span>
                  <span>${priceRange}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile filter button */}
          <div className="md:hidden mb-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg flex items-center shadow-sm border border-white/30 w-full justify-center"
            >
              <Filter size={18} className="mr-2" />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Mobile filters */}
          {isFilterOpen && (
            <div className="md:hidden bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/30 mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-gray-800">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['all', 't-shirts', 'perfume', 'hoodies'].map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'text-gray-700 hover:bg-gray-100/50'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2 text-gray-800">Price Range</h3>
                <ClientOnly>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={priceRange} 
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </ClientOnly>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>$0</span>
                  <span>${priceRange}</span>
                </div>
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="w-full md:w-3/4">
            {/* Sort options */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/30 mb-6 flex justify-between items-center">
              <div>
                <span className="text-gray-600">Showing {filteredProducts.length} products</span>
              </div>
              <div className="flex items-center">
                <label className="mr-2 text-gray-600">Sort by:</label>
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-white/50 border border-gray-200/50 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="default">Default</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-white/30 hover:-translate-y-1"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                    
                    {/* Star Rating */}
                    <StarRating 
                      rating={productRatings[product.id] || 0} 
                      setRating={(rating) => handleRatingChange(product.id, rating)}
                    />
                    
                    {/* Add to Cart Button */}
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load more button */}
            {visibleProducts < products.length && (
              <div className="mt-8 text-center">
                <button 
                  onClick={loadMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add to Cart Popup */}
      <AddToCartPopup 
        product={selectedProduct} 
        isOpen={showPopup} 
        onClose={handleClosePopup} 
      />
    </div>
  );
};

export default ShopPage;