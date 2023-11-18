import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Tutorial from "@/components/Tutorial";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Destinations />
      <Tutorial />
      <Contact />
    </div>
  )
}
