import React from 'react';
import ClientApp from './clientApp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ibrahim Allahbukhsh',
  description: "Ibrahim Allahbukhsh's personal website showcasing his experience and skills as a software engineer",
  metadataBase: new URL('https://ibrahimallahbukhsh.com/'),
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function App() {
  
  return <ClientApp />;
}