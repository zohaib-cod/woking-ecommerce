// // // // src/app/tshirt/page.jsx
// // // 'use client';

// // // import { useState } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import Link from 'next/link';

// // // const TshirtPage = () => {
// // //   const router = useRouter();
// // //   const [selectedSize, setSelectedSize] = useState('');
// // //   const [hoveredProduct, setHoveredProduct] = useState(null);
// // //   const [selectedColor, setSelectedColor] = useState('#ff0000');

// // //   // Sample product data
// // //   const tshirts = [
// // //     { id: 1, name: 'Classic Cotton T-Shirt', price: 29.99, colors: ['#ff0000', '#0000ff', '#00ff00'], image: 'https://via.placeholder.com/300x400/ff9999/ffffff?text=Classic+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/99ff99/000000?text=Hover+View' },
// // //     { id: 2, name: 'Premium Fit T-Shirt', price: 39.99, colors: ['#000000', '#808080', '#ffffff'], image: 'https://via.placeholder.com/300x400/cccccc/000000?text=Premium+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/999999/ffffff?text=Hover+View' },
// // //     { id: 3, name: 'Graphic Print T-Shirt', price: 34.99, colors: ['#ffff00', '#800080', '#ffa500'], image: 'https://via.placeholder.com/300x400/ffff99/000000?text=Graphic+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcc99/000000?text=Hover+View' },
// // //     { id: 4, name: 'V-Neck T-Shirt', price: 27.99, colors: ['#ffc0cb', '#008000', '#000080'], image: 'https://via.placeholder.com/300x400/ffccff/000000?text=V-Neck+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ccffcc/000000?text=Hover+View' },
// // //     { id: 5, name: 'Oversized T-Shirt', price: 32.99, colors: ['#36454f', '#800020', '#ee82ee'], image: 'https://via.placeholder.com/300x400/ccccff/000000?text=Oversized+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcccc/000000?text=Hover+View' },
// // //     { id: 6, name: 'Slim Fit T-Shirt', price: 36.99, colors: ['#ffd700', '#654321', '#ffbf00'], image: 'https://via.placeholder.com/300x400/ffffcc/000000?text=Slim+Fit+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcc66/000000?text=Hover+View' },
// // //   ];

// // //   const sizes = ['Small', 'Medium', 'Large', 'XL'];

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       {/* Navigation */}
// // //       <nav className="bg-white shadow-md">
// // //         <div className="container mx-auto px-4 py-3">
// // //           <div className="flex justify-center space-x-10">
// // //             <button 
// // //               onClick={() => router.push('/')}
// // //               className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
// // //             >
// // //               Home
// // //             </button>
// // //             <button 
// // //               onClick={() => router.push('/shop')}
// // //               className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
// // //             >
// // //               Shop
// // //             </button>
// // //             <button className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
// // //               T-Shirts
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       <div className="container mx-auto px-4 py-8">
// // //         <h1 className="text-3xl font-bold text-center mb-8">T-Shirts Collection</h1>
        
// // //         {/* Main product display */}
// // //         <div className="flex flex-col lg:flex-row gap-8 mb-12">
// // //           {/* Product image */}
// // //           <div className="w-full lg:w-1/2">
// // //             <div className="bg-white p-6 rounded-lg shadow-md">
// // //               <div className="relative h-96 overflow-hidden rounded-md">
// // //                 <img 
// // //                   src={hoveredProduct !== null ? tshirts[0].hoverImage : tshirts[0].image} 
// // //                   alt={tshirts[0].name}
// // //                   className="w-full h-full object-cover transition-opacity duration-300"
// // //                   onMouseEnter={() => setHoveredProduct(tshirts[0].id)}
// // //                   onMouseLeave={() => setHoveredProduct(null)}
// // //                 />
// // //                 <div className="absolute bottom-3 left-3 flex space-x-2">
// // //                   {tshirts[0].colors.map(color => (
// // //                     <button
// // //                       key={color}
// // //                       onClick={() => setSelectedColor(color)}
// // //                       className={`w-7 h-7 rounded-full border-2 ${selectedColor === color ? 'border-white ring-2 ring-blue-500' : 'border-gray-300'}`}
// // //                       style={{ backgroundColor: color }}
// // //                       aria-label={`Select color`}
// // //                     />
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           {/* Product details */}
// // //           <div className="w-full lg:w-1/2">
// // //             <div className="bg-white p-6 rounded-lg shadow-md h-full">
// // //               <h2 className="text-2xl font-bold mb-2">{tshirts[0].name}</h2>
// // //               {selectedSize && (
// // //                 <p className="text-gray-600 mb-4">Size: {selectedSize}</p>
// // //               )}
// // //               <p className="text-blue-600 font-bold text-xl mb-6">${tshirts[0].price.toFixed(2)}</p>
              
// // //               {/* Size selection */}
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold mb-3">Select Size:</h3>
// // //                 <div className="flex space-x-3">
// // //                   {sizes.map(size => (
// // //                     <button
// // //                       key={size}
// // //                       onClick={() => setSelectedSize(size)}
// // //                       className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-blue-100 text-blue-800 border-blue-500' : 'border-gray-300 hover:bg-gray-100'}`}
// // //                     >
// // //                       {size}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               </div>
              
// // //               {/* Add to cart button */}
// // //               <button 
// // //                 className={`w-full py-3 rounded-md font-semibold ${selectedSize ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
// // //                 disabled={!selectedSize}
// // //               >
// // //                 {selectedSize ? 'Add to Cart' : 'Select a size'}
// // //               </button>
              
// // //               {/* Product description */}
// // //               <div className="mt-6">
// // //                 <h3 className="text-lg font-semibold mb-2">Product Description</h3>
// // //                 <p className="text-gray-600">
// // //                   Our premium cotton t-shirt is perfect for everyday wear. Made from 100% high-quality cotton, it offers exceptional comfort and durability. The classic fit ensures a flattering silhouette for all body types.
// // //                 </p>
// // //                 <ul className="mt-3 text-gray-600 list-disc pl-5">
// // //                   <li>100% premium cotton</li>
// // //                   <li>Double-stitched seams for durability</li>
// // //                   <li>Pre-shrunk to maintain shape</li>
// // //                   <li>Available in multiple colors</li>
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
        
// // //         {/* More t-shirts */}
// // //         <h2 className="text-2xl font-bold mb-6">More T-Shirts</h2>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {tshirts.slice(1).map(tshirt => (
// // //             <div 
// // //               key={tshirt.id} 
// // //               className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
// // //               onMouseEnter={() => setHoveredProduct(tshirt.id)}
// // //               onMouseLeave={() => setHoveredProduct(null)}
// // //             >
// // //               <div className="relative h-60 overflow-hidden">
// // //                 <img 
// // //                   src={hoveredProduct === tshirt.id ? tshirt.hoverImage : tshirt.image} 
// // //                   alt={tshirt.name}
// // //                   className="w-full h-full object-cover transition-opacity duration-300"
// // //                 />
// // //                 <div className="absolute bottom-2 left-2 flex space-x-1">
// // //                   {tshirt.colors.map(color => (
// // //                     <div
// // //                       key={color}
// // //                       className="w-4 h-4 rounded-full border border-gray-300"
// // //                       style={{ backgroundColor: color }}
// // //                     />
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //               <div className="p-4">
// // //                 <h3 className="font-semibold text-lg mb-1">{tshirt.name}</h3>
// // //                 <p className="text-blue-600 font-bold">${tshirt.price.toFixed(2)}</p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TshirtPage;





// // // src/app/tshirt/page.jsx (Updated with Add to Cart)
// // 'use client';

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Link from 'next/link';
// // import { useCart } from '@/context/CartContext';

// // const TshirtPage = () => {
// //   const router = useRouter();
// //   const [selectedSize, setSelectedSize] = useState('');
// //   const [hoveredProduct, setHoveredProduct] = useState(null);
// //   const [selectedColor, setSelectedColor] = useState('#ff0000');
// //   const { addToCart } = useCart();

// //   // Sample product data
// //   const tshirts = [
// //     { id: 1, name: 'Classic Cotton T-Shirt', price: 29.99, colors: ['#ff0000', '#0000ff', '#00ff00'], image: 'https://via.placeholder.com/300x400/ff9999/ffffff?text=Classic+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/99ff99/000000?text=Hover+View' },
// //     { id: 2, name: 'Premium Fit T-Shirt', price: 39.99, colors: ['#000000', '#808080', '#ffffff'], image: 'https://via.placeholder.com/300x400/cccccc/000000?text=Premium+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/999999/ffffff?text=Hover+View' },
// //     { id: 3, name: 'Graphic Print T-Shirt', price: 34.99, colors: ['#ffff00', '#800080', '#ffa500'], image: 'https://via.placeholder.com/300x400/ffff99/000000?text=Graphic+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcc99/000000?text=Hover+View' },
// //     { id: 4, name: 'V-Neck T-Shirt', price: 27.99, colors: ['#ffc0cb', '#008000', '#000080'], image: 'https://via.placeholder.com/300x400/ffccff/000000?text=V-Neck+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ccffcc/000000?text=Hover+View' },
// //     { id: 5, name: 'Oversized T-Shirt', price: 32.99, colors: ['#36454f', '#800020', '#ee82ee'], image: 'https://via.placeholder.com/300x400/ccccff/000000?text=Oversized+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcccc/000000?text=Hover+View' },
// //     { id: 6, name: 'Slim Fit T-Shirt', price: 36.99, colors: ['#ffd700', '#654321', '#ffbf00'], image: 'https://via.placeholder.com/300x400/ffffcc/000000?text=Slim+Fit+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcc66/000000?text=Hover+View' },
// //   ];

// //   const sizes = ['Small', 'Medium', 'Large', 'XL'];

// //   const handleAddToCart = () => {
// //     if (!selectedSize) return;
    
// //     addToCart(
// //       {
// //         id: tshirts[0].id,
// //         name: tshirts[0].name,
// //         price: tshirts[0].price,
// //         image: tshirts[0].image
// //       },
// //       selectedSize,
// //       selectedColor
// //     );
    
// //     alert('Product added to cart!');
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
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
// //             <button 
// //               onClick={() => router.push('/shop')}
// //               className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
// //             >
// //               Shop
// //             </button>
// //             <button className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
// //               T-Shirts
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="container mx-auto px-4 py-8">
// //         <h1 className="text-3xl font-bold text-center mb-8">T-Shirts Collection</h1>
        
// //         {/* Main product display */}
// //         <div className="flex flex-col lg:flex-row gap-8 mb-12">
// //           {/* Product image */}
// //           <div className="w-full lg:w-1/2">
// //             <div className="bg-white p-6 rounded-lg shadow-md">
// //               <div className="relative h-96 overflow-hidden rounded-md">
// //                 <img 
// //                   src={hoveredProduct !== null ? tshirts[0].hoverImage : tshirts[0].image} 
// //                   alt={tshirts[0].name}
// //                   className="w-full h-full object-cover transition-opacity duration-300"
// //                   onMouseEnter={() => setHoveredProduct(tshirts[0].id)}
// //                   onMouseLeave={() => setHoveredProduct(null)}
// //                 />
// //                 <div className="absolute bottom-3 left-3 flex space-x-2">
// //                   {tshirts[0].colors.map(color => (
// //                     <button
// //                       key={color}
// //                       onClick={() => setSelectedColor(color)}
// //                       className={`w-7 h-7 rounded-full border-2 ${selectedColor === color ? 'border-white ring-2 ring-blue-500' : 'border-gray-300'}`}
// //                       style={{ backgroundColor: color }}
// //                       aria-label={`Select color`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Product details */}
// //           <div className="w-full lg:w-1/2">
// //             <div className="bg-white p-6 rounded-lg shadow-md h-full">
// //               <h2 className="text-2xl font-bold mb-2">{tshirts[0].name}</h2>
// //               {selectedSize && (
// //                 <p className="text-gray-600 mb-4">Size: {selectedSize}</p>
// //               )}
// //               <p className="text-blue-600 font-bold text-xl mb-6">${tshirts[0].price.toFixed(2)}</p>
              
// //               {/* Size selection */}
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold mb-3">Select Size:</h3>
// //                 <div className="flex space-x-3">
// //                   {sizes.map(size => (
// //                     <button
// //                       key={size}
// //                       onClick={() => setSelectedSize(size)}
// //                       className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-blue-100 text-blue-800 border-blue-500' : 'border-gray-300 hover:bg-gray-100'}`}
// //                     >
// //                       {size}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>
              
// //               {/* Add to cart button */}
// //               <button 
// //                 onClick={handleAddToCart}
// //                 className={`w-full py-3 rounded-md font-semibold ${selectedSize ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
// //                 disabled={!selectedSize}
// //               >
// //                 {selectedSize ? 'Add to Cart' : 'Select a size'}
// //               </button>
              
// //               {/* Product description */}
// //               <div className="mt-6">
// //                 <h3 className="text-lg font-semibold mb-2">Product Description</h3>
// //                 <p className="text-gray-600">
// //                   Our premium cotton t-shirt is perfect for everyday wear. Made from 100% high-quality cotton, it offers exceptional comfort and durability. The classic fit ensures a flattering silhouette for all body types.
// //                 </p>
// //                 <ul className="mt-3 text-gray-600 list-disc pl-5">
// //                   <li>100% premium cotton</li>
// //                   <li>Double-stitched seams for durability</li>
// //                   <li>Pre-shrunk to maintain shape</li>
// //                   <li>Available in multiple colors</li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* More t-shirts */}
// //         <h2 className="text-2xl font-bold mb-6">More T-Shirts</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {tshirts.slice(1).map(tshirt => (
// //             <div 
// //               key={tshirt.id} 
// //               className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
// //               onMouseEnter={() => setHoveredProduct(tshirt.id)}
// //               onMouseLeave={() => setHoveredProduct(null)}
// //             >
// //               <div className="relative h-60 overflow-hidden">
// //                 <img 
// //                   src={hoveredProduct === tshirt.id ? tshirt.hoverImage : tshirt.image} 
// //                   alt={tshirt.name}
// //                   className="w-full h-full object-cover transition-opacity duration-300"
// //                 />
// //                 <div className="absolute bottom-2 left-2 flex space-x-1">
// //                   {tshirt.colors.map(color => (
// //                     <div
// //                       key={color}
// //                       className="w-4 h-4 rounded-full border border-gray-300"
// //                       style={{ backgroundColor: color }}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //               <div className="p-4">
// //                 <h3 className="font-semibold text-lg mb-1">{tshirt.name}</h3>
// //                 <p className="text-blue-600 font-bold">${tshirt.price.toFixed(2)}</p>
// //                 <button 
// //                   onClick={() => router.push(`/tshirt/${tshirt.id}`)}
// //                   className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
// //                 >
// //                   View Details
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TshirtPage;









// // src/app/tshirt/page.jsx
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { useCart } from '@/context/CartContext';

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
//           className={`text-xl ${
//             star <= (hoverRating || rating)
//               ? 'text-yellow-500'
//               : 'text-gray-300'
//           } ${editable ? 'cursor-pointer' : 'cursor-default'}`}
//           disabled={!editable}
//         >
//           ★
//         </button>
//       ))}
//     </div>
//   );
// }

// const TshirtPage = () => {
//   const router = useRouter();
//   const [selectedSize, setSelectedSize] = useState('');
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('#ff0000');
//   const [productRatings, setProductRatings] = useState({});
//   const { addToCart } = useCart();

//   // Sample product data
//   const tshirts = [
//     { id: 1, name: 'Classic Cotton T-Shirt', price: 29.99, colors: ['#ff0000', '#0000ff', '#00ff00'], image: 'https://via.placeholder.com/300x400/ff9999/ffffff?text=Classic+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/99ff99/000000?text=Hover+View' },
//     { id: 2, name: 'Premium Fit T-Shirt', price: 39.99, colors: ['#000000', '#808080', '#ffffff'], image: 'https://via.placeholder.com/300x400/cccccc/000000?text=Premium+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/999999/ffffff?text=Hover+View' },
//     { id: 3, name: 'Graphic Print T-Shirt', price: 34.99, colors: ['#ffff00', '#800080', '#ffa500'], image: 'https://via.placeholder.com/300x400/ffff99/000000?text=Graphic+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcc99/000000?text=Hover+View' },
//     { id: 4, name: 'V-Neck T-Shirt', price: 27.99, colors: ['#ffc0cb', '#008000', '#000080'], image: 'https://via.placeholder.com/300x400/ffccff/000000?text=V-Neck+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ccffcc/000000?text=Hover+View' },
//     { id: 5, name: 'Oversized T-Shirt', price: 32.99, colors: ['#36454f', '#800020', '#ee82ee'], image: 'https://via.placeholder.com/300x400/ccccff/000000?text=Oversized+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcccc/000000?text=Hover+View' },
//     { id: 6, name: 'Slim Fit T-Shirt', price: 36.99, colors: ['#ffd700', '#654321', '#ffbf00'], image: 'https://via.placeholder.com/300x400/ffffcc/000000?text=Slim+Fit+T-Shirt', hoverImage: 'https://via.placeholder.com/300x400/ffcc66/000000?text=Hover+View' },
//   ];

//   const sizes = ['Small', 'Medium', 'Large', 'XL'];

//   const handleAddToCart = () => {
//     if (!selectedSize) return;
    
//     addToCart(
//       {
//         id: tshirts[0].id,
//         name: tshirts[0].name,
//         price: tshirts[0].price,
//         image: tshirts[0].image
//       },
//       selectedSize,
//       selectedColor
//     );
    
//     alert('Product added to cart!');
//   };

//   const handleRatingChange = (productId, rating) => {
//     setProductRatings(prev => ({
//       ...prev,
//       [productId]: rating
//     }));
//   };

//   const handleAddToCartProduct = (product) => {
//     addToCart(product, 'Standard', product.colors[0]);
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex justify-center space-x-10">
//             <button 
//               onClick={() => router.push('/')}
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
//             >
//               Home
//             </button>
//             <button 
//               onClick={() => router.push('/shop')}
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium"
//             >
//               Shop
//             </button>
//             <button className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
//               T-Shirts
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-8">T-Shirts Collection</h1>
        
//         {/* Main product display */}
//         <div className="flex flex-col lg:flex-row gap-8 mb-12">
//           {/* Product image */}
//           <div className="w-full lg:w-1/2">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="relative h-96 overflow-hidden rounded-md">
//                 <img 
//                   src={hoveredProduct !== null ? tshirts[0].hoverImage : tshirts[0].image} 
//                   alt={tshirts[0].name}
//                   className="w-full h-full object-cover transition-opacity duration-300"
//                   onMouseEnter={() => setHoveredProduct(tshirts[0].id)}
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 />
//                 <div className="absolute bottom-3 left-3 flex space-x-2">
//                   {tshirts[0].colors.map(color => (
//                     <button
//                       key={color}
//                       onClick={() => setSelectedColor(color)}
//                       className={`w-7 h-7 rounded-full border-2 ${selectedColor === color ? 'border-white ring-2 ring-blue-500' : 'border-gray-300'}`}
//                       style={{ backgroundColor: color }}
//                       aria-label={`Select color`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Product details */}
//           <div className="w-full lg:w-1/2">
//             <div className="bg-white p-6 rounded-lg shadow-md h-full">
//               <h2 className="text-2xl font-bold mb-2">{tshirts[0].name}</h2>
//               {selectedSize && (
//                 <p className="text-gray-600 mb-4">Size: {selectedSize}</p>
//               )}
//               <p className="text-blue-600 font-bold text-xl mb-6">${tshirts[0].price.toFixed(2)}</p>
              
//               {/* Star Rating */}
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold mb-2">Rate this product:</h3>
//                 <StarRating 
//                   rating={productRatings[tshirts[0].id] || 0} 
//                   setRating={(rating) => handleRatingChange(tshirts[0].id, rating)}
//                 />
//               </div>
              
//               {/* Size selection */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-3">Select Size:</h3>
//                 <div className="flex space-x-3">
//                   {sizes.map(size => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-blue-100 text-blue-800 border-blue-500' : 'border-gray-300 hover:bg-gray-100'}`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Add to cart button */}
//               <button 
//                 onClick={handleAddToCart}
//                 className={`w-full py-3 rounded-md font-semibold ${selectedSize ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
//                 disabled={!selectedSize}
//               >
//                 {selectedSize ? 'Add to Cart' : 'Select a size'}
//               </button>
              
//               {/* Product description */}
//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold mb-2">Product Description</h3>
//                 <p className="text-gray-600">
//                   Our premium cotton t-shirt is perfect for everyday wear. Made from 100% high-quality cotton, it offers exceptional comfort and durability. The classic fit ensures a flattering silhouette for all body types.
//                 </p>
//                 <ul className="mt-3 text-gray-600 list-disc pl-5">
//                   <li>100% premium cotton</li>
//                   <li>Double-stitched seams for durability</li>
//                   <li>Pre-shrunk to maintain shape</li>
//                   <li>Available in multiple colors</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* More t-shirts */}
//         <h2 className="text-2xl font-bold mb-6">More T-Shirts</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tshirts.slice(1).map(tshirt => (
//             <div 
//               key={tshirt.id} 
//               className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
//               onMouseEnter={() => setHoveredProduct(tshirt.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               <div className="relative h-60 overflow-hidden">
//                 <img 
//                   src={hoveredProduct === tshirt.id ? tshirt.hoverImage : tshirt.image} 
//                   alt={tshirt.name}
//                   className="w-full h-full object-cover transition-opacity duration-300"
//                 />
//                 <div className="absolute bottom-2 left-2 flex space-x-1">
//                   {tshirt.colors.map(color => (
//                     <div
//                       key={color}
//                       className="w-4 h-4 rounded-full border border-gray-300"
//                       style={{ backgroundColor: color }}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-1">{tshirt.name}</h3>
//                 <p className="text-blue-600 font-bold">${tshirt.price.toFixed(2)}</p>
                
//                 {/* Star Rating for product cards */}
//                 <div className="my-2">
//                   <StarRating 
//                     rating={productRatings[tshirt.id] || 0} 
//                     setRating={(rating) => handleRatingChange(tshirt.id, rating)}
//                   />
//                 </div>
                
//                 <button 
//                   onClick={() => handleAddToCartProduct(tshirt)}
//                   className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TshirtPage;








// src/app/tshirt/page.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';

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

const TshirtPage = () => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState('');
  const [productRatings, setProductRatings] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  // Sample product data with high-quality images
  const tshirts = [
    { id: 1, name: 'Classic Cotton T-Shirt', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Premium Fit T-Shirt', price: 39.99, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Graphic Print T-Shirt', price: 34.99, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'V-Neck T-Shirt', price: 27.99, image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'Oversized T-Shirt', price: 32.99, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
    { id: 6, name: 'Slim Fit T-Shirt', price: 36.99, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  ];

  const sizes = ['XS', 'Small', 'Medium', 'Large', 'XL', '2XL'];

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    addToCart(
      {
        id: tshirts[0].id,
        name: tshirts[0].name,
        price: tshirts[0].price,
        image: tshirts[0].image
      },
      selectedSize,
      '#000000'
    );
    
    setSelectedProduct(tshirts[0]);
    setShowPopup(true);
  };

  const handleAddToCartProduct = (product) => {
    addToCart(product, 'Medium', '#000000');
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const handleRatingChange = (productId, rating) => {
    setProductRatings(prev => ({
      ...prev,
      [productId]: rating
    }));
  };

  // Add to Cart Popup Component
  const AddToCartPopup = () => {
    if (!showPopup) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-md w-full shadow-xl border border-white/30">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Added to Cart!</h3>
            <button 
              onClick={handleClosePopup}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src={selectedProduct?.image} 
              alt={selectedProduct?.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-medium text-gray-800">{selectedProduct?.name}</h4>
              <p className="text-blue-600 font-semibold">${selectedProduct?.price?.toFixed(2)}</p>
              {selectedSize && <p className="text-sm text-gray-600">Size: {selectedSize}</p>}
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={handleClosePopup}
              className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Continue Shopping
            </button>
            <button 
              onClick={() => window.location.href = '/cart'}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <ShoppingBag size={16} className="mr-2" />
              View Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-center space-x-10">
            <button 
              onClick={() => router.push('/')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              Home
            </button>
            <button 
              onClick={() => router.push('/shop')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium transition-colors"
            >
              Shop
            </button>
            <button className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">
              T-Shirts
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">T-Shirts Collection</h1>
        
        {/* Main product display */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Product image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/30">
              <div className="relative h-96 overflow-hidden rounded-2xl">
                <img 
                  src={tshirts[0].image} 
                  alt={tshirts[0].name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Product details */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/30 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{tshirts[0].name}</h2>
              <p className="text-blue-600 font-bold text-xl mb-6">${tshirts[0].price.toFixed(2)}</p>
              
              {/* Star Rating */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Customer Reviews</h3>
                <StarRating 
                  rating={productRatings[tshirts[0].id] || 4} 
                  setRating={(rating) => handleRatingChange(tshirts[0].id, rating)}
                />
                <p className="text-sm text-gray-600 mt-1">Based on 124 reviews</p>
              </div>
              
              {/* Size selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Select Size:</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border rounded-lg transition-all ${
                        selectedSize === size 
                          ? 'bg-blue-100 text-blue-800 border-blue-500' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Add to cart button */}
              <button 
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  selectedSize 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {selectedSize ? 'Add to Cart' : 'Select a size'}
              </button>
              
              {/* Product description */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Product Description</h3>
                <p className="text-gray-600">
                  Our premium cotton t-shirt is perfect for everyday wear. Made from 100% high-quality cotton, 
                  it offers exceptional comfort and durability. The classic fit ensures a flattering silhouette 
                  for all body types.
                </p>
                <ul className="mt-3 text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    100% premium cotton
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Double-stitched seams for durability
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Pre-shrunk to maintain shape
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Machine washable
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* More t-shirts */}
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">More T-Shirts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tshirts.slice(1).map(tshirt => (
            <div 
              key={tshirt.id} 
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-white/30 hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={tshirt.image} 
                  alt={tshirt.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors">
                  <Heart size={16} className="text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{tshirt.name}</h3>
                <p className="text-blue-600 font-bold">${tshirt.price.toFixed(2)}</p>
                
                {/* Star Rating for product cards */}
                <div className="my-2">
                  <StarRating 
                    rating={productRatings[tshirt.id] || 4} 
                    setRating={(rating) => handleRatingChange(tshirt.id, rating)}
                  />
                </div>
                
                <button 
                  onClick={() => handleAddToCartProduct(tshirt)}
                  className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add to Cart Popup */}
      <AddToCartPopup />
    </div>
  );
};

export default TshirtPage;