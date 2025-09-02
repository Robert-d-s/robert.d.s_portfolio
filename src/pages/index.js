import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import SubSection from "../components/SubSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Main />
      <SubSection />
      <Footer />
    </div>
  );
}
//
