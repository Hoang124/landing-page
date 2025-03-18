import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import ExclusiveCard from "./components/ExclusiveCard";
import Providers from "./components/Providers";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <div className="w-vw">
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
