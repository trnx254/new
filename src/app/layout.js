import { Inter } from "next/font/google";
import "./globals.css";
import provider from "@/lib/provider";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Deal Checker",
    description:
        "Deal Checker is a website that helps you find the best deals on various products and services online. Whether you are looking for electronics, fashion, travel, or anything else, Deal Checker compares prices and reviews from hundreds of websites and shows you the best offers. Save money, save time, save hassle with Deal Checker, the ultimate online shopping assistant.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <provider>{children}</provider>
                </ThemeProvider>
            </body>
        </html>
    );
}
