import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import ExclusiveCard from "./components/ExclusiveCard";
import Providers from "./components/Providers";
import Footer from "./components/Footer";
// import dynamic from "next/dynamic";

// const SwiperComponent = dynamic(() => import("./components/Carousel"), { ssr: false });

export default function Home() {
  return (

    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <Header />
      <div className='pt-[67.8px]'>
        <Carousel />
        <div className="body-content">
          <Menu />
          <ExclusiveCard />
          <Providers />
        </div>
      </div>
      <Footer />
    </div>
  );
}
