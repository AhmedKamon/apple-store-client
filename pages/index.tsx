import { Tab } from "@headlessui/react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { Category, Product } from "../typings";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchproducts } from "../utils/fetchProducts";

interface Props {
  categories: Category[];
  products: Product[]
}

const Home = ({ categories,products }: Props) => {
  console.log(products,'all products')
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
        <div className=" space-y-10 py-14 ">
          <h1 className="text-center text-white text-4xl font-medium tracking-wide md:text-5xl">
            New Promos
          </h1>

          <Tab.Group>
            <Tab.List className="flex justify-center">
              { categories ? categories.map((categorie) => (
                <Tab
                key={categorie._id}
                id={categorie._id}
                className={({selected}) =>`whitespace-nowrap text-sm rounded-t-lg py-3 px-5 font-light outline-none md:py-4 md:px-4 md:text-base  ${ selected ? 'bg-[#35383c] text-white borderGradient' : 'border-[#35383c] border-b-2 text-[#747474] '  }`}
                >{categorie.title}</Tab>
              )): []}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4 ">
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
              <Tab.Panel>Mac</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;

// backend get data from server
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchproducts();
  return {
    props: {
      categories: categories || null,
      products: products || null,
    },
  };
};
