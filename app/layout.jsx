import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";


export const metadata = {
  title: "Promptopia",
  description: "Create & Share AI Prompts", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>
        <main className="app">
          <Nav />
          {children}
          <Provider />
        </main>
      </body>
    </html>
  );
}
