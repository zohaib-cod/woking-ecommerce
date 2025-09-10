



// // src/app/components/Header/Page.jsx
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
// import { useCart } from '@/context/CartContext';

// export default function Header() {
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { cartCount } = useCart();

//   // Auto-close search after 7 seconds
//   useEffect(() => {
//     if (searchOpen) {
//       const timer = setTimeout(() => {
//         setSearchOpen(false);
//         setSearchQuery("");
//       }, 7000);
//       return () => clearTimeout(timer);
//     }
//   }, [searchOpen]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim() !== "") {
//       alert(`Searching for: ${searchQuery}`);
//     }
//   };

//   return (
//     <header className="w-full bg-white/80 backdrop-blur-md px-6 py-3 flex items-center justify-between fixed top-0 z-50 border-b border-gray-100">
//       {/* Left: Logo */}
//       <div className="text-2xl font-bold text-gray-800">
//         <Link href="/">ZohaibStore</Link>
//       </div>

//       {/* Center: Links (Desktop) */}
//       <div className="hidden md:flex gap-8 text-md font-medium">
//         <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
//         <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
//         <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">Shop</Link>
//         <Link href="/tshirt" className="text-gray-700 hover:text-blue-600 transition-colors">T-Shirts</Link>
//       </div>

//       {/* Right: Icons */}
//       <div className="flex items-center gap-4">
//         {/* Search */}
//         <div className="flex items-center gap-2 relative">
//           <form
//             onSubmit={handleSearch}
//             className={`flex items-center border border-gray-200 rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
//               searchOpen ? "w-48 px-3" : "w-10"
//             }`}
//           >
//             <input
//               type="text"
//               placeholder="Search..."
//               className={`flex-1 px-2 py-1 outline-none transition-all duration-300 bg-transparent ${
//                 searchOpen ? "opacity-100" : "opacity-0 w-0"
//               }`}
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={() => setSearchOpen((prev) => !prev)}
//               className="flex justify-center self-center p-2"
//             >
//               <Search className="w-4 h-4" />
//             </button>
//           </form>
//         </div>

//         {/* Cart */}
//         <Link href="/cart" className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
//           <ShoppingCart className="w-5 h-5" />
//           {cartCount > 0 && (
//             <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>

//         {/* Login */}
//         <Link href="/login" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//           <User className="w-5 h-5 cursor-pointer" />
//         </Link>

//         {/* Hamburger (Mobile) */}
//         <button
//           onClick={() => setMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
//         >
//           {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out transform ${
//           menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <nav className="flex flex-col items-center gap-4 py-4">
//           <Link href="/" onClick={() => setMenuOpen(false)} className="py-2">Home</Link>
//           <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2">About</Link>
//           <Link href="/shop" onClick={() => setMenuOpen(false)} className="py-2">Shop</Link>
//           <Link href="/tshirt" onClick={() => setMenuOpen(false)} className="py-2">T-Shirts</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }





"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  // Auto-close search after 7 seconds
  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => {
        setSearchOpen(false);
        setSearchQuery("");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [searchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between fixed top-0 z-50 border-b border-gray-100">
      {/* Left: Logo */}
      <div className="text-xl md:text-2xl font-bold text-gray-800">
        <Link href="/">ZohaibStore</Link>
      </div>

      {/* Center: Links (Desktop) */}
      <nav className="hidden md:flex gap-8 text-md font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="/shop" className="hover:text-blue-600 transition-colors">Shop</Link>
        <Link href="/tshirt" className="hover:text-blue-600 transition-colors">T-Shirts</Link>
      </nav>

      {/* Right: Icons */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <form
          onSubmit={handleSearch}
          className={`flex items-center border border-gray-200 rounded-full overflow-hidden transition-all duration-300 bg-white ${
            searchOpen ? "w-44 sm:w-56 px-2" : "w-10"
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className={`flex-1 px-2 py-1 outline-none transition-all duration-300 text-sm bg-transparent ${
              searchOpen ? "opacity-100" : "opacity-0 w-0"
            }`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            className="p-2"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Cart */}
        <Link
          href="/cart"
          className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Login */}
        <Link
          href="/login"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <User className="w-5 h-5 cursor-pointer" />
        </Link>

        {/* Hamburger (Mobile only) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-40">
          <nav className="flex flex-col items-center gap-4 py-5">
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-2">Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2">About</Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)} className="py-2">Shop</Link>
            <Link href="/tshirt" onClick={() => setMenuOpen(false)} className="py-2">T-Shirts</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
