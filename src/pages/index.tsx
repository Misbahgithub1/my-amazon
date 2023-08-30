// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps;
}
export default function Home({ productData }: Props) {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        {/* <Banner /> */}
        {/* <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10 "> */}
          {/* <Products productData={productData} /> */}
            
        {/* </div> */}

        <div className="">
          <Banner/>
        </div>
        
        <div>
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}

// SSR data fetching

export const getServerSideProps = async () => {
  const res = await fetch(`https://fakestoreapiserver.reactbd.com/tech`);
  const productData = await res.json();

  return { props: { productData } };
};
