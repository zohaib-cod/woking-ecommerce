// // src/context/CartContext.js
// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);
//   const [cartCount, setCartCount] = useState(0);

//   // Load cart from localStorage on initial render
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // Update cartCount and save to localStorage whenever cart changes
//   useEffect(() => {
//     setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product, size, color) => {
//     setCart(prevCart => {
//       // Check if product with same ID, size and color already exists in cart
//       const existingItemIndex = prevCart.findIndex(
//         item => item.id === product.id && item.size === size && item.color === color
//       );

//       if (existingItemIndex >= 0) {
//         // If exists, increase quantity
//         const updatedCart = [...prevCart];
//         updatedCart[existingItemIndex].quantity += 1;
//         return updatedCart;
//       } else {
//         // If not exists, add new item
//         return [
//           ...prevCart,
//           {
//             ...product,
//             size,
//             color,
//             quantity: 1
//           }
//         ];
//       }
//     });
//   };

//   const removeFromCart = (productId, size, color) => {
//     setCart(prevCart => 
//       prevCart.filter(item => !(item.id === productId && item.size === size && item.color === color))
//     );
//   };

//   const updateQuantity = (productId, size, color, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(productId, size, color);
//       return;
//     }

//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === productId && item.size === size && item.color === color
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const getCartTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{
//       cart,
//       cartCount,
//       addToCart,
//       removeFromCart,
//       updateQuantity,
//       clearCart,
//       getCartTotal
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// }






// src/context/CartContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Update cartCount and save to localStorage whenever cart changes
  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size = 'Standard', color = '#000000') => {
    setCart(prevCart => {
      // Check if product with same ID, size and color already exists in cart
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && item.size === size && item.color === color
      );

      if (existingItemIndex >= 0) {
        // If exists, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // If not exists, add new item
        return [
          ...prevCart,
          {
            ...product,
            size,
            color,
            quantity: 1
          }
        ];
      }
    });
  };

  const removeFromCart = (productId, size, color) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === productId && item.size === size && item.color === color))
    );
  };

  const updateQuantity = (productId, size, color, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, size, color);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.size === size && item.color === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}