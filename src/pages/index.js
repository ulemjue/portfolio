import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import About from "../components/about";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto bg-gray-100">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
    </div>
  );
}
