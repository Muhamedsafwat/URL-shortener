import Head from "next/head";

import { Header } from "../components";
import {
  BoostSection,
  HeroSection,
  MainSection,
  Footer,
} from "../components/sections";

export default function Home() {
  return (
    <>
      <Head>
        <title>URL Shortener</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Header />
      <HeroSection />
      <MainSection />
      <BoostSection />
      <Footer />
    </>
  );
}
