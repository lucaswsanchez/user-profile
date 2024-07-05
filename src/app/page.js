import Nav from "@/components/Nav/Nav";
import styles from "./page.module.css";
import About from "@/components/About/About";
import Interests from "@/components/Interests/Interests";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <About />
      <Interests />
      <Contact />
    </main>
  );
}
