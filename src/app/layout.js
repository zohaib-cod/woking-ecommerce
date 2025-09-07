

// // src/app/layout.js
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/app/components/Header/Page";
// import Slider from "@/app/components/Slider/Page";
// import Footer from "@/app/components/Footer/page";
// import { CartProvider } from '@/context/CartContext';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "ZohaibStore - Your Premium Shopping Destination",
//   description: "Discover amazing products at great prices",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <CartProvider>
//           <Header/>
//           <Slider/>
//           {children}
//           <Footer/>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }






// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Page";
import Slider from "@/app/components/Slider/Page";
import Footer from "@/app/components/Footer/page";
import { CartProvider } from '@/context/CartContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZohaibStore - Modern & Minimalist Shopping",
  description: "Discover amazing products with our modern, minimalist shopping experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Header/>
          <Slider/>
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}