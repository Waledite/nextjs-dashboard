import '@/app/ui/global.css'; // Import global styles
import { inter } from '@/app/ui/font'; // Import the Inter font

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}