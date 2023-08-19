"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

const Providers = ({ children} : ThemeProviderProps) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>{children}</SessionProvider>
        </NextThemesProvider>
    </QueryClientProvider>
  );
};

export default Providers;

