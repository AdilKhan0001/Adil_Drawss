import '@/styles/globals.css'
import { Head } from 'next/document'
import Link from 'next/link'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
