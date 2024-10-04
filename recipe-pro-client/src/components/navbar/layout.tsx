import Actions from "./@actions/page";
import DesktopMenu from "./@DesktopMenu/page";
import Logo from "./@Logo/page";
import MobileMenu from "./@MobileMenu/page";
import Navbar from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar
          logo={<Logo />}
          desktopMenu={<DesktopMenu />}
          mobileMenu={<MobileMenu />}
          actions={<Actions />}
        />
        {children}
      </body>
    </html>
  );
}
