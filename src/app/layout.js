import { Open_Sans } from "next/font/google";
import "./globals.css";


const open = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${open.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
