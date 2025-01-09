import Header from '@/app/components/layout/Header'
import Footer from './components/layout/Footer';
import "./globals.css";
import Navbar from './components/layout/Navbar';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
