import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

  title: "Mi aplicacion con NextJS",
  description: "Aplicacion desarrollada por Cassandra",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)


 {
  return (
    <html lang="es">
      <body

      >
        {children}
      </body>
    </html>
  );
}
