// "use client";

// import { usePathname } from "next/navigation";
// import Navbar from "@/components/nav/Navbar";
// import Footer from "@/components/footer/Footer";

// export default function ClientLayoutWrapper({ children }) {
//   const pathname = usePathname();
//   const isAdminPage = pathname.startsWith("/admin");

//   return (
//     <>
//       {!isAdminPage && <Navbar />}
//       {children}
//       {!isAdminPage && <Footer />}
//     </>
//   );
// }


"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/Header/Page";
import Slider from "@/app/components/Slider/Page";
import Footer from "@/app/components/Footer/page";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <Slider />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
