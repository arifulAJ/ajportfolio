import Herosection from "@/components/herosection";

import AboutSection from "@/components/aboutSection";
import Services from "@/components/services";
import MyResume from "@/components/myResume";
import ClientFeadback from "@/components/clientFeadback";
import MyPortfolio from "@/components/myPortfolio";
import Partner from "@/components/partner";
import MyBlog from "@/components/myBlog";
import ContactForm from "@/components/eamilConatct";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Herosection />

      <AboutSection />
      <Services />
      <MyResume />
      <ClientFeadback />
      <MyPortfolio />
      <Partner />
      <MyBlog />
      <ContactForm />
      <Footer />
    </div>
  );
}
