import './globals.css';
import { Baskervville } from 'next/font/google';
import Header from '../components/Header';

const baskervville = Baskervville({ subsets: ['latin'], weight: '400', display: 'swap' });

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={baskervville.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
