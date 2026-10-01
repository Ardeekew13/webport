import { Roboto, Bebas_Neue } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata = {
  title: "Portfolio - Ron Derick Quilicot",
  description: "Welcome to my portfolio website! I'm Ron Derick Quilicot, a passionate web developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience as you navigate through my work.",
};

// Applies the saved theme before first paint so light-mode visitors don't see a dark flash.
const themeScript = `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${roboto.variable} ${bebas.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
