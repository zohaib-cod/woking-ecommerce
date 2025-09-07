// // src/app/about/page.jsx
// "use client";

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function AboutPage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Navigation Banner */}
//       <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Company Name</h1>
//             <nav className="flex space-x-8">
//               <Link 
//                 href="/" 
//                 className={`pb-1 transition-all duration-300 ${pathname === '/' ? 'border-b-2 border-white font-semibold' : 'hover:border-b-2 hover:border-white/70'}`}
//               >
//                 Home
//               </Link>
//               <Link 
//                 href="/about" 
//                 className={`pb-1 transition-all duration-300 ${pathname === '/about' ? 'border-b-2 border-white font-semibold' : 'hover:border-b-2 hover:border-white/70'}`}
//               >
//                 About
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-12">
//         {/* Hero Section */}
//         <section className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Our Company</h1>
//             <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
//             <p className="text-xl text-gray-600 mb-10">
//               We are a team of passionate individuals dedicated to creating innovative solutions that make a difference.
//             </p>
//           </div>
//         </section>

//         {/* Content Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
//           <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
//             <div className="space-y-4 text-gray-700">
//               <p>
//                 Founded in 2010, our company began as a small startup with a big vision: to transform the way businesses 
//                 interact with technology. What started as a team of three in a garage has now grown to a workforce of 
//                 over 200 talented professionals.
//               </p>
//               <p>
//                 Our journey hasn't been without challenges, but each obstacle has strengthened our resolve and refined 
//                 our approach. We've learned that innovation isn't just about having great ideas—it's about executing 
//                 them with precision and care.
//               </p>
//               <p>
//                 Today, we serve clients across 15 countries, providing cutting-edge solutions that drive growth, 
//                 efficiency, and competitive advantage. Our commitment to excellence has earned us numerous industry 
//                 awards and, more importantly, the trust of our clients.
//               </p>
//             </div>
//           </div>

//           <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <div className="bg-white p-6 rounded-xl shadow-lg h-full">
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
//               <p className="text-gray-700 mb-6">
//                 To empower businesses with technology solutions that are not only innovative but also practical, 
//                 sustainable, and aligned with their long-term goals.
//               </p>
              
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
//               <p className="text-gray-700">
//                 To create a future where technology seamlessly enhances human potential and fosters meaningful 
//                 connections across the globe.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Innovation",
//                 icon: "💡",
//                 description: "We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions."
//               },
//               {
//                 title: "Integrity",
//                 icon: "🤝",
//                 description: "We believe in doing what's right, not what's easy, and building trust through transparency."
//               },
//               {
//                 title: "Excellence",
//                 icon: "⭐",
//                 description: "We strive for the highest quality in everything we do, paying attention to every detail."
//               }
//             ].map((value, index) => (
//               <div 
//                 key={index} 
//                 className={`bg-white p-6 rounded-xl shadow-md text-center transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0 hover:-translate-y-2' : 'opacity-0 translate-y-8'}`}
//               >
//                 <div className="text-4xl mb-4">{value.icon}</div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Leadership Team</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "Sarah Johnson",
//                 role: "CEO & Founder",
//                 image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//               },
//               {
//                 name: "Michael Chen",
//                 role: "CTO",
//                 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//               },
//               {
//                 name: "Emma Rodriguez",
//                 role: "CFO",
//                 image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//               },
//               {
//                 name: "David Kim",
//                 role: "COO",
//                 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
//               }
//             ].map((member, index) => (
//               <div 
//                 key={index} 
//                 className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0 hover:shadow-xl' : 'opacity-0 translate-y-8'}`}
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-4 text-center">
//                   <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
//                   <p className="text-blue-600">{member.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className={`bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center mb-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { number: "200+", label: "Team Members" },
//               { number: "15", label: "Countries" },
//               { number: "500+", label: "Clients" },
//               { number: "98%", label: "Client Satisfaction" }
//             ].map((stat, index) => (
//               <div key={index} className="p-4">
//                 <div className="text-4xl font-bold mb-2">{stat.number}</div>
//                 <div className="text-blue-100">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
//           <div className="flex justify-center space-x-6 mt-4">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }







// src/app/about/page.jsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, Target, Award, Heart, Globe, Star, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-indigo-100/80 backdrop-blur-sm">
      {/* Navigation Banner */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 text-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ZohaibStore</h1>
            <nav className="flex space-x-6">
              <Link 
                href="/" 
                className={`pb-1 transition-all duration-300 ${pathname === '/' ? 'border-b-2 border-blue-500 font-medium' : 'hover:border-b-2 hover:border-gray-300'}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`pb-1 transition-all duration-300 ${pathname === '/about' ? 'border-b-2 border-blue-500 font-medium' : 'hover:border-b-2 hover:border-gray-300'}`}
              >
                About
              </Link>
              <Link 
                href="/shop" 
                className={`pb-1 transition-all duration-300 ${pathname === '/shop' ? 'border-b-2 border-blue-500 font-medium' : 'hover:border-b-2 hover:border-gray-300'}`}
              >
                Shop
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About ZohaibStore</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 mb-10">
              We are passionate about bringing you the finest products with an exceptional shopping experience.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded with a vision to revolutionize online shopping, ZohaibStore began as a small passion project 
                and has grown into a trusted destination for quality products. We believe that everyone deserves 
                access to beautifully designed, functional items that enhance daily life.
              </p>
              <p>
                Our journey started with a simple idea: create a shopping experience that feels personal, curated, 
                and enjoyable. We carefully select each product in our collection, ensuring it meets our high standards 
                for quality, design, and value.
              </p>
              <p>
                Today, we serve customers across the country, providing not just products but an experience that 
                celebrates good design, functionality, and the joy of discovering something special.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-white/30 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="mr-2 text-blue-500" size={24} />
                Our Mission
              </h3>
              <p className="text-gray-700 mb-8">
                To deliver exceptional products and shopping experiences that inspire and delight our customers 
                while maintaining the highest standards of quality and service.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Globe className="mr-2 text-indigo-500" size={24} />
                Our Vision
              </h3>
              <p className="text-gray-700">
                To become the most trusted and loved destination for discerning shoppers who value quality, 
                design, and exceptional service.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                icon: <Star className="text-amber-400" size={32} />,
                description: "We are committed to offering only the highest quality products that stand the test of time."
              },
              {
                title: "Customer First",
                icon: <Heart className="text-rose-500" size={32} />,
                description: "Our customers are at the heart of everything we do. Their satisfaction is our top priority."
              },
              {
                title: "Innovation",
                icon: <Award className="text-blue-500" size={32} />,
                description: "We continuously seek new ways to improve and innovate our products and services."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-white/30 text-center transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0 hover:-translate-y-2' : 'opacity-0 translate-y-8'}`}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Chen",
                role: "Head of Product",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Emma Rodriguez",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "David Kim",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className={`bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-white/30 transition-all duration-500 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0 hover:shadow-md' : 'opacity-0 translate-y-8'}`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className={`bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-md rounded-2xl p-8 text-white text-center mb-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "10K+", label: "Happy Customers", icon: <Users size={24} /> },
              { number: "500+", label: "Products", icon: <Award size={24} /> },
              { number: "98%", label: "Satisfaction Rate", icon: <Star size={24} /> },
              { number: "24/7", label: "Support", icon: <Heart size={24} /> }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`text-center mb-20 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Explore?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of products that combine quality, design, and exceptional value.
          </p>
          <Link 
            href="/shop" 
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md"
          >
            Start Shopping
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </section>
      </main>
{/* 
      <footer className="bg-gray-800/80 backdrop-blur-md text-white py-12 border-t border-gray-700/50">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} ZohaibStore. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}