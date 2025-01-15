import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import CustomLoader from "./components/loader/loader";

export const metadata = {
  title: "Created",
  description: "Classic Handbag store",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children, params }) {
  const pathname = params?.pathname || ""; // Adjust based on actual param structure
  const excludeHeaderFooter = pathname === "/login" || pathname === "/sign-up";

  return (
    <html lang="en">
      <body>
        <CustomLoader>
          {!excludeHeaderFooter && <Header />}
          {children}
          {!excludeHeaderFooter && <Footer />}
        </CustomLoader>
      </body>
    </html>
  );
}
