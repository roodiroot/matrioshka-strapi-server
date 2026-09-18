import Navbar from "./components/general/navbar/Navbar";
import HeroBLock from "./components/main_page/hero_block/HeroBlock";
import Footer from "./components/main_page/footer/Footer";
import Overlay from "./components/general/Overlay";
import Section_1 from "./components/main_page/section_1/Section_1";
import Section_2 from "./components/main_page/section_2/Section_2";
import Section_3 from "./components/main_page/section_3/Section_3";

function App() {
  return (
    <div className="">
      <Navbar />
      <HeroBLock />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Footer />
      <Overlay />
    </div>
  );
}

export default App;
