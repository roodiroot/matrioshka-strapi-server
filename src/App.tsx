import Seo from "./components/general/Seo";
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
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./components/general/ScrollToTop";

import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <ScrollToTop />
      <div className="pt-23 bg-primary-button" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
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
      <Seo
        title="Разработка сайтов для бизнеса"
        description="Веб-студия «Матрёшка» — создаём современные и быстрые сайты для бизнеса и стартапов. Разрабатываем сайты, которые помогают решать задачи бизнеса и расти."
      />
      <HeroBLock />
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </>
  );
}

export default App;
