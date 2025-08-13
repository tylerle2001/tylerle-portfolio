import "./globals.css";

export const metadata = {
  title: "Tyler Le Portfolio",
  description: "Personal portfolio showcasing my work and interests",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Keep while drafting; remove when ready to be indexed */}
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
