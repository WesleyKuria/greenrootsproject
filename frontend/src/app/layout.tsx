import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Marina",
  description: "Mangrove Conservation Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-green-700 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">GreenRoots</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/team" className="hover:underline">
                Team
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
