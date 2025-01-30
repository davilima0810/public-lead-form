"use client";
import Sidebar from "@/components/organisms/Sidebar";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noSidebarRoutes = ["/login", "/form", "/success-form"];
  const shouldShowSidebar = !noSidebarRoutes.includes(pathname);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <title>Alma AI</title>
      </head>
      <body style={{ margin: 0 }}>
        {shouldShowSidebar ? <Sidebar>{children}</Sidebar> : children}
      </body>
    </html>
  );
}