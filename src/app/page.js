import BackToTop from "@/components/BackToTop";
import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <BackToTop />
      <Header />
      <Expertise />
      <Choose />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
