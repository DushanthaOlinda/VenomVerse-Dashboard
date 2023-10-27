import './globals.css'
import React from "react";
import MenuContextProvider from "/context/MenuContext";


export const metadata = {
  title: 'VenomVerse Dashboard',
  description: 'VenomVerse Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <MenuContextProvider>
              {children}
      </MenuContextProvider>
      </body>
    </html>
  )
}
