import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
        <InstagramFeed />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
