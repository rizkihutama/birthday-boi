import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Birthday boi',
  description: 'countdown for my birthday',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='ahegao' suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
