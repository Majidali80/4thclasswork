import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// src/app/layout.tsx
import Footer from './components/footer/page';  // Adjust the path accordingly


export const metadata = {
  title: 'Your Website Title',
  description: 'Your Website Description',
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Add your header component or code here */}
        </header>
        
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default Layout;
