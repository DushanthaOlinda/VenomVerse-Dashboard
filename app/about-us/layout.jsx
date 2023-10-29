import '../globals.css'
import MainLayout from "/components/MainLayout";
import React from "react";
import MenuContextProvider from "/context/MenuContext";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <MenuContextProvider>
            <MainLayout >
            {children}
            </MainLayout>
        </MenuContextProvider>
        </body>
        </html>
    )
}
