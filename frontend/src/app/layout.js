import SmoothScrollWrapper from "@/components/Hooks/SmoothScrollWrapper";
import "./globals.css";
import DynamicNavbar from "@/components/Homepage/DynamicNav";
import Footrex from "@/components/Homepage/Footrex";
export const metadata = {
  title: "Entrepreneur Edge™",
  description: "VRT Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollWrapper>
          
        {children}
        </SmoothScrollWrapper>
       
        </body>
    </html>
  );
}
