import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Header from "@/components/Header";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <Header />
      <Expertise />
      <Choose />
      <Reviews />
      <Contact />
    </div>
  );
}
