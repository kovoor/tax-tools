import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Metadata } from "next"

// either Static metadata
export const metadata: Metadata = {
  verification: {
    google: "aWF77SEz5IwWJG1DXw6JZ_LkFIIkVFWh_3LQNKvjtNQ",
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
