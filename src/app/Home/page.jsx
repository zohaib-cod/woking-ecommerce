
// pages/index.js
"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "This is an amazing store! The product quality is exceptional and delivery was super fast. Will definitely shop here again!",
      name: "Sarah Johnson",
      rating: 5,
      icon: "💕"
    },
    {
      id: 2,
      text: "I've been shopping here for years. Always satisfied with their products and customer service. Highly recommended!",
      name: "Michael Chen",
      rating: 4,
      icon: "👍"
    },
    {
      id: 3,
      text: "The website is easy to navigate and my order arrived sooner than expected. The product was exactly as described.",
      name: "Emma Rodriguez",
      rating: 5,
      icon: "⭐"
    },
    {
      id: 4,
      text: "Great prices and frequent sales. I've saved so much money shopping here compared to other stores.",
      name: "James Wilson",
      rating: 4,
      icon: "💰"
    },
    {
      id: 5,
      text: "Customer support was very helpful when I had an issue with my order. They resolved it quickly and professionally.",
      name: "Lisa Taylor",
      rating: 5,
      icon: "👏"
    },
    {
      id: 6,
      text: "Product quality is consistently good. I appreciate the attention to detail in both products and packaging.",
      name: "Robert Kim",
      rating: 5,
      icon: "🎁"
    },
    {
      id: 7,
      text: "Fast shipping and the products always exceed my expectations. This is my go-to store for all my needs.",
      name: "Maria Garcia",
      rating: 5,
      icon: "🚀"
    },
    {
      id: 8,
      text: "Reasonable prices with quality that matches more expensive brands. Very satisfied with my purchases.",
      name: "David Brown",
      rating: 4,
      icon: "👌"
    },
    {
      id: 9,
      text: "The product descriptions are accurate and detailed. I received exactly what I expected from the images.",
      name: "Jennifer Lee",
      rating: 5,
      icon: "✅"
    }
  ];

  const products = [
    { id: 1, name: "Wireless Headphones", price: "$129.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Smart Watch", price: "$199.99", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Running Shoes", price: "$89.99", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Designer Sunglasses", price: "$89.99", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Leather Handbag", price: "$149.99", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Fitness Tracker", price: "$79.99", image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Bluetooth Speaker", price: "$69.99", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Gaming Mouse", price: "$59.99", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "Water Bottle", price: "$24.99", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Laptop Sleeve", price: "$39.99", image: "https://images.unsplash.com/photo-1546936985-5b150d155e5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "Desk Lamp", price: "$49.99", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "Phone Case", price: "$29.99", image: "https://images.unsplash.com/photo-1601593346740-9b5a4e6b6917?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
  ];

  const services = [
    {
      icon: "🔄",
      title: "7-Days Returns",
      description: "Risk-free shopping with easy returns."
    },
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "No extra costs, just the price you see."
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "24/7 support, always here just for you."
    },
    {
      icon: "🎁",
      title: "Member Discounts",
      description: "Special offers for our loyal customers."
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 3) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 3 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ShopEase - Premium Online Store</title>
        <meta name="description" content="ShopEase - Your one-stop shop for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">ShopEase</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Categories</a>
            <a href="#" className="text-gray-700 hover:text-green-600">About</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Images */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="Fashion Sale" 
              className="w-full h-64 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80" 
              alt="Electronics" 
              className="w-full h-64 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Featured Products Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <a href="#" className="flex items-center text-green-600 font-semibold group">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="block w-full h-0.5 bg-green-600 mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-green-600 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Summer Sale</h2>
          <p className="text-xl mb-6">Up to 50% off on selected items. Limited time offer!</p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>

        {/* Customer Reviews */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Reviews</h2>
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(currentReview, currentReview + 3).map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-4">{review.icon}</div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevReview} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextReview} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopEase</h3>
              <p className="text-gray-400">Your one-stop shop for all your needs. Quality products at affordable prices.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns & Refunds</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                123 Commerce Street<br />
                City, State 10001<br />
                Email: info@shopease.com<br />
                Phone: (123) 456-7890
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}