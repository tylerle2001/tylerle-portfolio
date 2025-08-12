import './globals.css';

export const metadata = {
  title: 'Tyler Le Portfolio',
  description: 'Personal portfolio showcasing my work and interests',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>{children}</body>
    </html>
  );
}
