import Navbar from "./components/general/navbar/Navbar";
import HeroBLock from "./components/main_page/hero_block/HeroBlock";
import Footer from "./components/main_page/footer/Footer";
import Overlay from "./components/general/Overlay";
import Section_1 from "./components/main_page/section_1/Section_1";
import Section_2 from "./components/main_page/section_2/Section_2";
import Section_3 from "./components/main_page/section_3/Section_3";
import { Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
import ContactsPage from "./pages/ContactsPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <Overlay />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroBLock />
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </>
  );
}

export default App;
