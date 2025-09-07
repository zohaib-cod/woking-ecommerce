// // src/app/search/page.jsx (Search Page)
// 'use client';

// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link';

// // Sample product data
// const allProducts = [
//   { id: 1, name: 'Classic T-Shirt', price: 29.99, category: 't-shirts', colors: ['#ff0000', '#0000ff', '#00ff00'], image: 'https://via.placeholder.com/300x400/ff9999/ffffff?text=T-Shirt+1' },
//   { id: 2, name: 'Luxury Perfume', price: 59.99, category: 'perfume', colors: ['#ffd700', '#c0c0c0'], image: 'https://via.placeholder.com/300x400/9999ff/ffffff?text=Perfume+1' },
//   { id: 3, name: 'Premium Hoodie', price: 49.99, category: 'hoodies', colors: ['#000000', '#808080', '#000080'], image: 'https://via.placeholder.com/300x400/cccccc/ffffff?text=Hoodie+1' },
//   { id: 4, name: 'Graphic T-Shirt', price: 34.99, category: 't-shirts', colors: ['#ffffff', '#000000'], image: 'https://via.placeholder.com/300x400/ffcc99/000000?text=T-Shirt+2' },
//   { id: 5, name: 'Floral Perfume', price: 69.99, category: 'perfume', colors: ['#ffc0cb', '#800080'], image: 'https://via.placeholder.com/300x400/ff99cc/ffffff?text=Perfume+2' },
//   { id: 6, name: 'Winter Hoodie', price: 54.99, category: 'hoodies', colors: ['#ff0000', '#008000'], image: 'https://via.placeholder.com/300x400/99ccff/000000?text=Hoodie+2' },
// ];

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get('q') || '';
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     if (query.trim() === '') {
//       setSearchResults([]);
//       return;
//     }

//     const results = allProducts.filter(product => 
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.category.toLowerCase().includes(query.toLowerCase())
//     );

//     setSearchResults(results);
//   }, [query]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Search Results for "{query}"</h1>
        
//         {searchResults.length === 0 ? (
//           <div className="bg-white p-8 rounded-lg shadow-md text-center">
//             <p className="text-gray-600 text-lg">No products found for "{query}"</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {searchResults.map(product => (
//               <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="h-60 overflow-hidden">
//                   <img 
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//                   <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
//                   <p className="text-gray-600 text-sm capitalize">{product.category}</p>
//                   <Link 
//                     href={`/${product.category}/${product.id}`}
//                     className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { Suspense } from "react";
import SearchComponent from "./SearchComponent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchComponent />
    </Suspense>
  );
}
