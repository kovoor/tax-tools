import { Head, Html, Main, NextScript } from "next/document"

import { Metadata } from "next"

// either Static metadata
export const metadata: Metadata = {
  verification: {
    google: "aWF77SEz5IwWJG1DXw6JZ_LkFIIkVFWh_3LQNKvjtNQ",
  },
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
