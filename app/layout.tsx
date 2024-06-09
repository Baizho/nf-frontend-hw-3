"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "./context/AuthContext";
import { ProviderTheme } from "./context/ThemeContext";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import "./globals.css";

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Provider>
          <ProviderTheme>
            <Header />
            <div className="flex justify-center">
              <ThemeToggleButton />
            </div>
            {children}
          </ProviderTheme>
        </Provider>
      </body>
    </html>
  );
}
