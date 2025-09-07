


// "use client";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "1.webp",
//   "2.webp",
//   "3.webp",
//   "4.webp",
// ];

// export default function Slider() {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 7 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 7000);
//     return () => clearInterval(timer);
//   }, [current]);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden bg-black mt-4">
//       {/* Slider wrapper */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out h-full"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((img, index) => (
//           <div key={index} className="w-full flex-shrink-0 h-full relative">
//             <img
//               src={img}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-contain"
//               onError={(e) => {
//                 // Fallback if image doesn't exist
//                 e.target.src = `https://via.placeholder.com/1200x500/333/fff?text=Slide+${index + 1}`;
//               }}
//             />
//             {/* Optional: Add overlay for better text visibility */}
//             <div className="absolute inset-0 bg-black/20"></div>
//           </div>
//         ))}
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === current ? "bg-white scale-125" : "bg-gray-400 hover:bg-gray-300"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




// src/app/components/Slider/Page.jsx
"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gray-100 mt-16">
      {/* Slider wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}