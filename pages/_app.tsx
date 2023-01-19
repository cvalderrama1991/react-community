import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Poppins } from "@next/font/google"
import Layout from "../components/Layout"

const poppins = Poppins({ style: "normal", weight: "500", subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
