import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MenuPreview from "@/components/MenuPreview";
import Materia from "@/components/Materia";
import Numeri from "@/components/Numeri";
import Locale from "@/components/Locale";
import Prenota from "@/components/Prenota";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <MenuPreview />
        <Materia />
        <Numeri />
        <Locale />
        <Prenota />
      </main>
      <SiteFooter />
    </>
  );
}
