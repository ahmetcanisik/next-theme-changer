import Providers from "@/app/providers";
import ThemeButton from "@/app/components/ThemeButton";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <header>
                <ThemeButton/>
            </header>
            {children}
        </Providers>
        </body>
        </html>
    );
}
