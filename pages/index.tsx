import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tech Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#e7ecee] ">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]">
        <h1 className="text-center text-white text-4xl font-medium tracking-wide md:text-5xl" >New Promos</h1>
      </section>
    </div>
  );
};

export default Home;
